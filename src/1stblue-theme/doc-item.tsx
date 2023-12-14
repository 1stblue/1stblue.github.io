import React from 'react';
import { DocProvider } from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';

import { TutorialChecklistProvider } from '../context/TutorialChecklistContext';

export const DocItem = props => {
  const MDXComponent = props.content;

  return (
    <DocProvider content={props.content}>
      <TutorialChecklistProvider>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
      </TutorialChecklistProvider>
    </DocProvider>
  );
};

