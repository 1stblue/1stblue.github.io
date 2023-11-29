import Head from '@docusaurus/Head';
import clsx from 'clsx';
import React from 'react';

import { CommonLayout } from '../1stblue-theme/common-layout';
import { LandingFooter } from '../1stblue-theme/landing-footer';
import { LandingCommunity } from '../1stblue-theme/landing-community';
import { LandingPackages } from '../1stblue-theme/landing-packages';
import { LandingHeroSection } from '../1stblue-theme/landing-hero-section';
import { LandingTryItSection } from '../1stblue-theme/landing-try-it-section';
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
        <link rel="preload" href="https://refine.new/embed-form" as="document" />
      </Head>
      <CommonLayout description="数据迁移你只需要这一个工具">
        <div className={clsx()}>
          <CommonHeader />
          <div
            className={clsx(
              'flex flex-col',
              'gap-16 landing-sm:gap-20 landing-md:gap-28 landing-lg:gap-40',
              'w-full max-w-[592px] landing-sm:max-w-[656px] landing-md:max-w-[896px] landing-lg:max-w-[1200px]',
              'px-2 landing-sm:px-0',
            //   'pb-12 landing-sm:pb-16 landing-md:pb-20 landing-lg:pb-40',
              'mx-auto'
            )}
          >
            <div className={clsx('mt-0', )}>
              <LandingHeroSection />
            </div>
            <LandingCoreAdvantages  />
            {/* <div className={clsx('flex flex-col', 'gap-12 landing-md:gap-6')}>
              <LandingPackages />
            
            </div>
            <LandingCommunity />
            <LandingTryItSection /> */}
          </div>
          <LandingFooter />
        </div>
      </CommonLayout>
    </>
  );
}

export default Home;

