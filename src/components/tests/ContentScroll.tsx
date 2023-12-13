/* eslint-disable react/no-object-type-as-default-prop */
import { ActionIcon, Box, ScrollArea, Transition, rem } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import type { FC } from 'react';
import React, { useRef, useState } from 'react';

const ContentScrollArea: FC<any> = ({ children, layoutProps = {}, ...props }) => {
  const viewport = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  return (
    <ScrollArea.Autosize viewportRef={viewport} onScrollPositionChange={setScrollPosition} {...props}>
      <Box {...layoutProps}>{children}</Box>
      <Transition transition="slide-up" mounted={scrollPosition.y > 0}>
        {transitionStyles => (
          <ActionIcon
            variant="default"
            aria-label="Scroll to top"
            size="lg"
            radius="lg"
            className="absolute bottom-5 right-5"
            style={transitionStyles}
            onClick={() => viewport.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
          </ActionIcon>
        )}
      </Transition>
    </ScrollArea.Autosize>
  );
};
export default ContentScrollArea;

