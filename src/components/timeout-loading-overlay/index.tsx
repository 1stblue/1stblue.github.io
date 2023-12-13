import { LoadingOverlay } from '@mantine/core';
import React, { useEffect, useState } from 'react';

const TimeoutLoadingOverlay = ({ visible, onVisibleChange, ...props }) => {
  const [isVisible, setIsVisible] = useState(visible);
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        onVisibleChange?.(false);
      }, 500);
    }
  }, [visible]);
  return <LoadingOverlay {...props} visible={isVisible} />;
};
export default TimeoutLoadingOverlay;

