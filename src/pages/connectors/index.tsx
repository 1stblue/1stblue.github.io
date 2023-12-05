import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo } from 'react';

import ConnectorsLayout from '@site/src/components/integrations/layout';
import { Connector } from '@site/src/types/connectors';
import Card from '../../components/integrations/card';

const List = ({ data, loading }: { data: Connector[]; loading: boolean }) => {
  const [checked, setChecked] = React.useState<string[]>(['rdbms', 'nosql', 'bigdata']);
  const cateData = [
    {
      label: 'RDBMS',
      value: 'rdbms',
      items: ['oracle', 'mysql', 'sqlserver', 'postgres']
    },
    {
      label: 'No SQL',
      value: 'nosql',
      items: ['mongodb']
    },
    {
      label: 'Big Data',
      value: 'bigdata',
      items: ['hdfs', 'kafka', 'hive']
    }
  ];
  const filterData = useMemo(() => {
    return data.filter(item => {
      return checked.some(cate => {
        return cateData.find(cateItem => cateItem.value === cate)?.items?.includes(item.id);
      });
    });
  }, [checked, data]);
  return (
    <div className="flex gap-8 items-start">
      <div className="flex-none w-fit">
        {cateData.map(cate => (
          <div className="flex gap-4 items-center my-2">
            <input
              type="checkbox"
              onChange={e =>
                setChecked(check => {
                  return checked.includes(cate.value)
                    ? checked.filter(item => item !== cate.value)
                    : [...checked, cate.value];
                })
              }
              checked={checked.includes(cate.value)}
              className="checkbox"
              aria-label={cate.label}
            />
            <span>{cate.label}</span>
          </div>
        ))}
      </div>
      <div className="flex-grow">
        <div className={clsx('grid', 'grid-cols-1 lg:grid-cols-2', 'gap-8', 'min-h-[calc(100vh-615px)]')}>
          {loading ? (
            <span className="loading loading-infinity loading-lg text-refine-blue inline-block m-auto col-span-1 lg:col-span-2"></span>
          ) : null}
          {!filterData?.length && !loading ? (
            <div className="m-auto col-span-1 lg:col-span-2">暂无数据</div>
          ) : null}
          {filterData.map(item => (
            <Card
              key={item.name}
              title={item.name}
              description={item.description}
              linkUrl={item.url}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Connectors: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [connectorList, setConnectorList] = React.useState<Connector[]>([]);
  const fetchConnectorList = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(`/api/v1/connection/spec/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });

      const json = await response.json();
      if (json?.code) {
        setConnectorList(
          json?.data?.map(item => {
            return {
              id: item.id,
              name: item.title,
              description: (
                <div className='flex flex-wrap items-start'>
                  {item?.vendor ? (
                    <span
                      className={clsx(
                        'no-underline hover:no-underline',
                        'text-xs',
                        'bg-gray-100 dark:bg-gray-700',
                        'text-gray-600 dark:text-gray-400',
                        'rounded',
                        'py-1',
                        'px-2',
                        'mx-1'
                      )}
                    >
                      {item.vendor}
                    </span>
                  ) : undefined}
                  {item?.stage ? (
                    <span
                      className={clsx(
                        'no-underline hover:no-underline',
                        'text-xs',
                        'bg-gray-100 dark:bg-gray-700',
                        'text-gray-600 dark:text-gray-400',
                        'rounded',
                        'py-1',
                        'px-2',
                        'mx-1'
                      )}
                    >
                      {item.stage}
                    </span>
                  ) : undefined}
                  {item?.version ? (
                    <span
                      className={clsx(
                        'no-underline hover:no-underline',
                        'text-xs',
                        'bg-gray-100 dark:bg-gray-700',
                        'text-gray-600 dark:text-gray-400',
                        'rounded',
                        'py-1',
                        'px-2',
                        'mx-1'
                      )}
                    >
                      {item.version}
                    </span>
                  ) : undefined}
                </div>
              ),
              url: `/docs/concept/connectors/${item.id}`,
              icon: `https://demo.1stblue.cloud/${item?.link}icon.svg`
            };
          }) || []
        );
      }
      console.log(json);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchConnectorList();
  }, []);
  return (
    <ConnectorsLayout>
      <div className={clsx('max-w-[624px]')}>
        <div
          className={clsx(
            'font-semibold',
            'text-gray-700 dark:text-gray-200',
            'text-xl sm:text-[40px] sm:leading-[56px]'
          )}
        >
          连接器
        </div>
        <div
          className={clsx(
            'font-semibold',
            'text-gray-700 dark:text-gray-300',
            'text-xs sm:text-base',
            'mt-4 sm:mt-8'
          )}
        >
          20+高质量连接器，可扩展性强
        </div>
      </div>

      <div className={clsx('my-10', 'border-b border-gray-200 dark:border-gray-700')} />

      <List data={connectorList} loading={loading} />
    </ConnectorsLayout>
  );
};

export default Connectors;

