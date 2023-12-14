import React, { Suspense, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import ConnectionInfo, { fetchConnectorTestReport } from './connection-info';
import { Accordion, Badge, Group, Image, Text, SegmentedControl, Select } from '@mantine/core';
import { useConnectionList, useConnectorList } from './server';
import { useLocation } from '@docusaurus/router';
import { useHover } from '@mantine/hooks';
import { preload } from 'swr';
import { IconArrowBigRight } from '@tabler/icons-react';
import TimeoutLoadingOverlay from '../timeout-loading-overlay';
import { DataTable } from 'mantine-datatable';

const ConnectorsAccordion: React.FC = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search)?.get('keyword');
  const { data: connectorList, error } = useConnectorList();
  const { data: connectionList, error: connectionError, isLoading } = useConnectionList(connectorList);
  if (error || connectionError || !connectorList?.length || !connectionList?.length) {
    return <div className="m-auto">暂无数据</div>;
  }

  const [connector, setConnector] = useState<string>(keyword);
  const [type, setType] = useState<string>('both');
  const [visible, setVisible] = useState<boolean>(isLoading);
  const [accordion, setAccordion] = useState<string>();
  useEffect(() => {
    setVisible(true);
  }, []);
  const AccordionItem = useMemo(() => {
    let accordionList = connectionList;
    if (connector) {
      if (type === 'source') accordionList = connectionList.filter(item => item?.source?.id === connector);
      if (type === 'destination')
        accordionList = connectionList.filter(item => item?.target?.id === connector);
      if (type === 'both')
        accordionList = connectionList.filter(
          item => item?.source?.id === connector || item?.target?.id === connector
        );
    }
    if (!accordionList.length) return <div className="text-center pt-24">暂无测试数据</div>;
    return accordionList.map(item => <TestReportAccordionItem item={item} accordion={accordion} />);
  }, [connectionList, connector, type, accordion]);
  return (
    <>
      <Group className="mt-6 mb-4">
        <Select
          clearable
          placeholder="连接器"
          data={connectorList}
          searchable
          value={connector}
          onChange={connector => {
            setConnector(connector);
            setVisible(true);
          }}
          maxDropdownHeight={400}
          nothingFound="暂无数据"
          filter={(value, item) =>
            item?.label?.toLowerCase()?.includes(value?.toLowerCase()?.trim()) ||
            item?.description?.toLowerCase()?.includes(value?.toLowerCase()?.trim())
          }
        />
        <Text>作为</Text>
        <SegmentedControl
          value={type}
          onChange={type => {
            setType(type);
            setVisible(true);
          }}
          data={[
            { label: '读取端', value: 'source' },
            { label: '写入端', value: 'destination' },
            { label: '任意端', value: 'both' }
          ]}
        />
      </Group>
      <div className={clsx('my-10', 'border-b border-gray-200 ')} />
      <div className={clsx('relative', 'min-h-[calc(100vh-435px)]')}>
        <TimeoutLoadingOverlay visible={visible} onVisibleChange={setVisible} overlayBlur={10} />
        <Accordion
          transitionDuration={0}
          value={accordion}
          onChange={setAccordion}
          chevronPosition="right"
          variant="contained"
        >
          {AccordionItem}
        </Accordion>
      </div>
    </>
  );
};

const TestReportAccordionItem = ({ item, accordion }) => {
  const { hovered, ref } = useHover();
  useEffect(() => {
    if (hovered) {
      // preload(`/test-assets/${item.value}.json`, fetchConnectorTestReport);
    }
  }, [hovered]);
  return (
    <Accordion.Item value={item.value} key={item.label}>
      <Accordion.Control>
        <div className="w-full flex items-center justify-evenly" ref={ref}>
          <div className={clsx('w-2/3 flex gap-4 sm:gap-8', 'no-underline', 'px-4  sm:px-8 ')}>
            <div className={clsx('w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center')}>
              <Image
                fit="fill"
                alt={item?.source?.id}
                src={`https://demo.1stblue.cloud/${item?.source?.link}icon.svg`}
              />
            </div>

            <div className={clsx('flex flex-col gap-2')}>
              <div className={clsx('text-gray-700 ', 'font-semibold flex items-center gap-2')}>
                {item?.source?.title}
                {item?.source?.version ? <Badge>{item?.source.version}</Badge> : undefined}
              </div>
              <div
                className={clsx('text-gray-600 ', 'text-xs sm:text-sm')}
                // dangerouslySetInnerHTML={{ __html: description }}
              >
                <div className="flex flex-wrap items-start gap-2">
                  {item?.source?.stage ? (
                    <Badge variant="outline" color="gray">
                      {item?.source.stage}
                    </Badge>
                  ) : undefined}
                  {item?.source?.vendor ? (
                    <Badge variant="outline" color="gray">
                      {item?.source.vendor}
                    </Badge>
                  ) : undefined}
                </div>
              </div>
            </div>
          </div>
          <IconArrowBigRight className="w-2/3 " />
          <div className={clsx('w-full flex gap-4 sm:gap-8', 'no-underline', 'px-4  sm:px-8 ')}>
            <div className={clsx('w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center')}>
              <Image
                fit="fill"
                alt={item?.target?.id}
                src={`https://demo.1stblue.cloud/${item?.target?.link}icon.svg`}
              />
            </div>
            <div className={clsx('flex flex-col gap-2')}>
              <div className={clsx('text-gray-700 ', 'font-semibold flex items-center gap-2')}>
                {item?.target?.title}
                {item?.target?.version ? <Badge>{item?.target.version}</Badge> : undefined}
              </div>
              <div
                className={clsx('text-gray-600 ', 'text-xs sm:text-sm')}
                // dangerouslySetInnerHTML={{ __html: description }}
              >
                <div className="flex flex-wrap items-start gap-2">
                  {item?.target?.stage ? (
                    <Badge variant="outline" color="gray">
                      {item?.target.stage}
                    </Badge>
                  ) : undefined}
                  {item?.target?.vendor ? (
                    <Badge variant="outline" color="gray">
                      {item?.target.vendor}
                    </Badge>
                  ) : undefined}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Accordion.Control>
      <Accordion.Panel>
        <div className="relative ">
          {/* <div className="relative max-h-[calc(100vh-240px)] min-h-[240px]"> */}
          <div className="flex justify-end"></div>
          <Accordion variant="contained" chevronPosition="left" multiple>
            <Accordion.Item value="data_type">
              <Accordion.Control>
                <div className="flex items-center justify-between">数据类型兼容情况</div>
              </Accordion.Control>
              <Accordion.Panel>
                <Accordion variant="contained" chevronPosition="left" multiple>
                  {[
                    {
                      name: '整数类型',
                      types: ['TINYINT', 'SMALLINT', 'INT', 'BIGINT', 'BOOLEAN']
                    },
                    {
                      name: '浮点类型',
                      types: ['FLOAT', 'DOUBLE', 'DECIMAL']
                    },
                    {
                      name: '字符串类型',
                      types: ['CHAR', 'VARCHAR', 'TEXT']
                    },
                    {
                      name: '日期与时间类型',
                      types: ['DATE', 'TIME', 'DATETIME', 'YEAR']
                    },
                    {
                      name: '二进制数据类型',
                      types: ['BINARY', 'VARBINARY', 'BLOB']
                    },
                    {
                      name: '其他特殊类型',
                      types: ['ENUM', 'SET', 'JSON']
                    }
                  ].map(item => {
                    return (
                      <Accordion.Item value={item.name} key={item.name}>
                        <Accordion.Control>
                          <div className="flex items-center justify-between">{item.name}</div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <DataTable
                            // withBorder
                            noHeader
                            withColumnBorders
                            columns={[{ accessor: 'type', width: '100%' }]}
                            records={item.types.map(type => ({ type }))}
                          />
                        </Accordion.Panel>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="flexibility">
              <Accordion.Control>读写性能</Accordion.Control>
              <Accordion.Panel>
                <div className="flex items-center justify-between"></div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="focus-ring">
              <Accordion.Control>稳定性</Accordion.Control>
              <Accordion.Panel>
                <div></div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
export default ConnectorsAccordion;

