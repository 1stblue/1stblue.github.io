import ky from 'ky';
import type { FC } from 'react';
import React from 'react';
import useSWR from 'swr';
import ExpandedAccordion from './expanded-data-accordion';
interface ExpandedProofProps {
  result: string;
  label: string;
  title: string;
  passed: number;
  failed: number;
  warning: number;
  checkItems: ExpandedDataProps[];
  [key: string]: any;
}
export interface ExpandedDataProps {
  result: string;
  label: string;
  title: string;
  proof: string | ExpandedProofProps;
  [key: string]: any;
}
interface DatasetField {
  MIN: string;
  DISTRIBUTION: string;
  FIELD_NAME: string;
  MAX: string;
  NULLABLE: string;
  SCALE: string;
  IGNORE: string;
  TYPE: string;
  PRECISION: string;
}
interface BatchDataTypeTestCase {
  dataset: DatasetField[];
  validators: {
    'Data Validation': {
      'TEST REPORT': ExpandedDataProps[];
    };
  };
}

const transferReportData = (prefix: string, data: ExpandedDataProps[]) => {
  let result: string;
  const passed = data.filter(item => item?.result === 'PASS').length;
  const failed = data.filter(item => item?.result === 'FAIL').length;
  const warning = data.filter(item => item?.result === 'WARN').length;
  if (passed > data.length * 0.5 || (passed > 0 && failed == 0)) {
    result = 'PASS';
  } else if (failed > passed) {
    result = 'FAIL';
  } else {
    result = 'WARN';
  }
  return {
    label: prefix,
    title: prefix,
    result,
    proof: {
      label: prefix,
      title: prefix,
      result,
      passed,
      failed,
      warning,
      checkItems: data
    }
  };
};

const transformTestReportData = (
  testCase: BatchDataTypeTestCase
): Promise<{
  dataset: DatasetField[];
  reports: ExpandedDataProps[];
}> => {
  return new Promise(resolve => {
    const dataset_map = testCase?.['DATASET']?.reduce((prev, next) => {
      prev[next?.['FIELD NAME']] = next;
      return prev;
    }, {});
    let reports: ExpandedDataProps[] = [];
    let transfer: ExpandedDataProps[] = [];
    const testReports = (testCase?.['VALIDATORS']?.['Data Validation']?.['TEST REPORT'] || [])?.sort(
      (prev, next) => prev?.label?.localeCompare(next?.label)
    );
    for (let index = 1; index < testReports.length; index++) {
      const prev = testReports[index - 1];
      prev.dataset = dataset_map?.[prev?.label];
      const element = testReports[index];
      element.dataset = dataset_map?.[element?.label];
      const prev_prefix = prev?.label?.split('_')?.[0];
      const element_prefix = element?.label?.split('_')?.[0];
      if (prev_prefix === element_prefix) {
        transfer.push(prev);
        if (index === testReports.length - 1) {
          transfer.push(element);
          reports.push(transferReportData(prev_prefix, transfer));
        }
      } else {
        if (transfer.length > 0) {
          reports.push(transferReportData(prev_prefix, transfer));
          transfer = [];
        } else {
          reports.push(prev);
        }
      }
    }
    resolve({
      dataset: testCase?.dataset,
      reports
    });
  });
};

export const fetchConnectorTestReport = async (url: string) => {
  const res = await ky.get(url).json();
  return transformTestReportData(res?.['TESTCASES']?.['BatchDataTypeTestCase']);
};

const ConnectionInfo: FC<{
  accordion: string;
}> = ({ accordion }) => {
  const { data } = useSWR(accordion ? `/test-assets/${accordion}.json` : null, fetchConnectorTestReport, {
    suspense: true
  });

  return <ExpandedAccordion records={data?.reports || []} />;
};
export default ConnectionInfo;

