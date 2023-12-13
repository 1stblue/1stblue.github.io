import React, { Suspense, useCallback, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import ConnectorsLayout from '@site/src/components/integrations/layout';
import { Avatar, Badge, Box, Button, Card, Checkbox, Image, Loader } from '@mantine/core';
import { useConnectorList } from '@site/src/components/tests/server';
import Link from '@docusaurus/Link';
import TimeoutLoadingOverlay from '@site/src/components/timeout-loading-overlay';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
const ConnectorCard = ({ checked }) => {
  const {
    siteConfig: { customFields }
  } = useDocusaurusContext();
  const { data: connectorList, error } = useConnectorList();
  if (error) return <div>暂无数据</div>;
  const filterData = useMemo(() => {
    return connectorList.filter(item => {
      return checked.some(cate => {
        return cateData.find(cateItem => cateItem.value === cate)?.items?.includes(item.id);
      });
    });
  }, [checked, connectorList]);
  return !filterData?.length ? (
    <div className="m-auto col-span-1 lg:col-span-2 xl:col-span-3">暂无数据</div>
  ) : (
    <>
      {filterData.map(item => (
        <Card padding={0} className="hover:shadow-lg h-fit" radius="lg" withBorder>
          <Card.Section className={clsx('flex gap-4 sm:gap-8', 'no-underline', 'p-4 pb-3 sm:p-8 sm:pb-6')}>
            <div className={clsx('w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center')}>
              <Image fit="fill" alt={item.id} src={`${customFields.FETCH_PREFIX}/${item?.link}icon.svg`} />
            </div>

            <div className={clsx('flex flex-col gap-2')}>
              <div
                className={clsx('text-gray-700 dark:text-gray-200', 'font-semibold flex items-center gap-2')}
              >
                {item?.title}
              </div>
              <div
                className={clsx('text-gray-600 dark:text-gray-300', 'text-xs sm:text-sm')}
                // dangerouslySetInnerHTML={{ __html: description }}
              >
                <div className="flex flex-wrap items-start gap-2">
                  {item?.version ? (
                    <Badge variant="outline" color="gray">
                      {item.version}
                    </Badge>
                  ) : undefined}
                  {item?.stage ? (
                    <Badge variant="outline" color="gray">
                      {item.stage}
                    </Badge>
                  ) : undefined}
                  {item?.vendor ? (
                    <Badge variant="outline" color="gray">
                      {item.vendor}
                    </Badge>
                  ) : undefined}
                </div>
              </div>
            </div>
          </Card.Section>
          <div className="flex items-center w-full">
            <Link className="text-sm no-underline w-full" to={`/docs/concept/connectors/${item.id}`}>
              <Button size="xs" variant="subtle" fullWidth>
                查看文档
              </Button>
            </Link>
            <Link className="text-sm no-underline w-full" to={`/tests?keyword=${item.id}`}>
              <Button size="xs" variant="subtle" fullWidth>
                测试报告
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </>
  );
};

const List = () => {
  const [checked, setChecked] = React.useState<string[]>(['rdbms', 'nosql', 'bigdata']);
  const [visible, setVisible] = React.useState(true);
  useEffect(() => {
    setVisible(true);
  }, []);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }
  }, [visible]);
  return (
    <div className="flex gap-8 items-start">
      <div className="flex-none w-fit">
        <Checkbox.Group
          value={checked}
          onChange={value => {
            setChecked(value);
            setVisible(true);
          }}
        >
          {cateData.map(cate => (
            <div className="flex gap-4 items-center my-2">
              <Checkbox value={cate.value} label={cate.label} />
            </div>
          ))}
        </Checkbox.Group>
      </div>
      <div className="flex-grow">
        <div
          className={clsx(
            'grid',
            'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
            'gap-8',
            'relative',
            'min-h-[calc(100vh-525px)]'
          )}
        >
          <TimeoutLoadingOverlay visible={visible} onVisibleChange={setVisible} overlayBlur={10} />
          <Suspense fallback={<Loader />}>
            <ConnectorCard checked={checked}></ConnectorCard>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const Connectors: React.FC = () => {
  return (
    <ConnectorsLayout title="连接器">
      <div className={clsx('max-w-[624px]')}>
        <div
          className={clsx(
            'font-semibold',
            'text-gray-700 dark:text-gray-200',
            'text-xl sm:text-[30px] sm:leading-[46px]'
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
      <List />
    </ConnectorsLayout>
  );
};

export default Connectors;

