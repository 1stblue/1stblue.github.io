import clsx from 'clsx';
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Accordion, createStyles, Text, Image, Badge, Loader, px, Group, Title, Grid } from '@mantine/core';
import ConnectionInfo, { ExpandedDataProps } from './connection-info';
import ContentScrollArea from './ContentScroll';

export const useStyles = createStyles(theme => ({
  expandIcon: {
    transition: 'transform 0.2s ease'
  },
  expandIconRotated: {
    transform: 'rotate(90deg)'
  },
  employeeName: {
    marginLeft: px(theme.spacing.xl) * 2
  }
}));

export const StatusBadge = ({ status }: { status: string }) => {
  const statusMap = {
    pass: 'green',
    fail: 'red',
    warn: 'yellow'
  };
  return (
    <Badge variant="outline" color={statusMap?.[status.toLowerCase()] || ''}>
      {status}
    </Badge>
  );
};
const ExpandedDataAccordion: React.FC<{
  records: ExpandedDataProps[];
}> = ({ records }) => {
  const items = useMemo(() => {
    return records.map(item =>
      typeof item.proof === 'string' ? (
        <Accordion.Item value={item.label} key={item.label} className="cursor-default">
          <Accordion.Control chevron={<></>} className="cursor-default">
            <Grid>
              <Grid.Col span="content">
                <StatusBadge status={item.result} />
              </Grid.Col>
              <Grid.Col span={4}>
                <Text>{item?.label?.split('_')?.filter(Boolean)?.join('_')}</Text>
              </Grid.Col>
              <Grid.Col span={'auto'}>
                <Text lineClamp={1}>{item.proof}</Text>
              </Grid.Col>
            </Grid>
          </Accordion.Control>
        </Accordion.Item>
      ) : (
        <Accordion.Item value={item.label} key={item.label}>
          <Accordion.Control>
            <Grid>
              <Grid.Col span="content">
                <StatusBadge status={item.result} />
              </Grid.Col>
              <Grid.Col span={4}>
                <Text>{item?.label?.split('_')?.filter(Boolean)?.join('_')}</Text>
              </Grid.Col>
              <Grid.Col span={'auto'}>
                <Text lineClamp={1}>{item?.dataset?.['COMMENT']}</Text>
              </Grid.Col>
            </Grid>
          </Accordion.Control>
          <Accordion.Panel>
            {<ExpandedDataAccordion records={item?.proof?.checkItems || []} />}
          </Accordion.Panel>
        </Accordion.Item>
      )
    );
  }, [records]);
  return (
    // <ContentScrollArea
    //   // mah="calc(100vh - 240px)"
    //   layoutProps={{
    //     className: 'h-full p-4'
    //   }}
    // >
    // </ContentScrollArea>
      <Accordion chevronPosition="left" variant="contained" multiple>
        {items}
      </Accordion>
  );
};

export default ExpandedDataAccordion;

