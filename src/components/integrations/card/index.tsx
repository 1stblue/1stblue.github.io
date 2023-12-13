import Link from '@docusaurus/Link';
import { contributor } from '@site/src/types/connectors';
import clsx from 'clsx';
import { Button, Image } from '@mantine/core';
import { Card } from '@mantine/core';
import React from 'react';
type LargeCardProps = {
  title: string;
  description: Element;
  linkUrl: string;
  icon: string;
  // icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const LinkCard: React.FC<LargeCardProps> = ({ title, description, icon, linkUrl }) => {
  return (
    <Card padding={0} className="hover:shadow-lg h-fit" radius="lg" withBorder>
      <Card.Section className={clsx('flex gap-4 sm:gap-8', 'no-underline', 'p-4 sm:p-8')}>
        <div className={clsx('w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center')}>{icon}</div>

        <div className={clsx('flex flex-col gap-2')}>
          <div className={clsx('text-gray-700 dark:text-gray-200', 'font-semibold')}>{title}</div>
          <div
            className={clsx('text-gray-600 dark:text-gray-300', 'text-xs sm:text-sm')}
            // dangerouslySetInnerHTML={{ __html: description }}
          >
            {description}
          </div>
        </div>
      </Card.Section>
      <Button.Group>
        <Link
          // target="_blank"
          to={linkUrl}
          rel="noreferrer"
        >
          <Button variant="transparent">查看文档</Button>
        </Link>
        <Link
          // target="_blank"
          to={`/tests?keyword=${}`}
          rel="noreferrer"
        >

        <Button variant="transparent">测试报告</Button>
        </Link>
      </Button.Group>
    </Card>
  );
};

export default LinkCard;

