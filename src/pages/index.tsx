import Head from '@docusaurus/Head';
import clsx from 'clsx';
import React from 'react';

import { CommonLayout } from '../1stblue-theme/common-layout';
import { LandingFooter } from '../1stblue-theme/landing-footer';
import { LandingHeroSection } from '../1stblue-theme/landing-hero-section';
import { CommonHeader } from '../1stblue-theme/common-header';
import { LandingCoreAdvantages } from '../1stblue-theme/landing-core-advantages';


function Home() {
  const title = 'Bluepipe | 数据因自由流动而美好';
  return (
    <>
      <Head>
        <html data-active-page="index" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <CommonLayout description="数据迁移你只需要这一个工具">
        <div className={clsx()}>
          <CommonHeader />
          <div
            className={clsx(
              'flex flex-col',
              'gap-16 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40',
              'w-full max-w-[83%]',
              'px-2 landing-sm:px-0',
            //   'pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40',
              'mx-auto'
            )}
          >
            <div className={clsx('mt-0', )}>
              <LandingHeroSection />
            </div>
            <LandingCoreAdvantages  />
          </div>
          <LandingFooter />
        </div>
      </CommonLayout>
    </>
  );
}

export default Home;

