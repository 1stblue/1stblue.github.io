import React, { Suspense, forwardRef } from 'react';
import clsx from 'clsx';
import ConnectorsAccordion from '@site/src/components/tests/accordion-page';
import ConnectorsLayout from '@site/src/components/integrations/layout';
import { Avatar, Group, LoadingOverlay, Select, Text } from '@mantine/core';

const Connectors: React.FC = () => {
  return (
    <ConnectorsLayout title="测试集">
      <div className={clsx('max-w-[624px]')}>
        <div
          className={clsx(
            'font-semibold',
            'text-gray-700 dark:text-gray-200',
            'text-xl sm:text-[30px] sm:leading-[46px]'
          )}
        >
          测试集
        </div>
      </div>
      <Suspense fallback={<LoadingOverlay visible overlayBlur={10} />}>
        <ConnectorsAccordion />
      </Suspense>
    </ConnectorsLayout>
  );
};

export default Connectors;

