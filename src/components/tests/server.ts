import { SelectItem } from '@mantine/core';
import ky from 'ky';
import useSWR from 'swr';

interface Response<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}
export interface ConnectorData extends SelectItem {
  id: string; // ID
  title: string; // 标题
  icon: string; // 图标
  link: string; // 链接
  vendor: string; // 厂商
  version: string; // 版本
  stage: string; // 阶段
  switches: any; // 开关
  [x: string]: any;
}
const getConnectorList = async () =>
  new Promise<ConnectorData[]>((resolve, reject) => {
    try {
      ky.get('https://demo.1stblue.cloud/api/v1/connection/spec/list', {})
        .json<Response<any>>()
        .then(res => {
          if (res?.code === 200) {
            resolve(
              (res?.data ?? []).map(item => ({
                ...item,
                value: item.id,
                label: item.title,
                image: `https://demo.1stblue.cloud/${item?.link}icon.svg`
              }))
            );
          } else {
            reject(res);
          }
        })
        .catch(reject);
    } catch (error) {
      reject(error);
      // ℹ️: The error name is "CanceledError" for Axios.
    }
  });
export function useConnectorList() {
  return useSWR('connectorList', async () => getConnectorList(), {
    suspense: true
  });
}

const getConnectionList = async (connectors: ConnectorData[]) =>
  new Promise<any[]>((resolve, reject) => {
    try {
      ky.get('/test-assets/constants.json')
        .json<any>()
        .then(res => {
          const connectorMap = connectors.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
          }, {});
          const connections = (res?.connections ?? []).map((connection: string) => {
            const connector = connection?.split('_');
            const source_id = connector?.[0]?.split(':')?.[0];
            const target_id = connector?.[1]?.split(':')?.[0];
            return {
              source: {
                ...(source_id ? connectorMap?.[source_id] : {}),
                version: connector?.[0]?.split(':')?.[1]
              },
              target: {
                ...(target_id ? connectorMap?.[target_id] : {}),
                id: connector?.[1]?.split(':')?.[0],
                version: connector?.[1]?.split(':')?.[1]
              },
              label: connection,
              value: connection
            };
          });
          resolve(connections);
        })
        .catch(reject);
    } catch (error) {
      reject(error);
      // ℹ️: The error name is "CanceledError" for Axios.
    }
  });
export function useConnectionList(connectors) {
  return useSWR('connectionList', async () => getConnectionList(connectors), {
    suspense: true
  });
}

