import React from "react";
import Head from "@docusaurus/Head";
import clsx from "clsx";
import { CommonLayout } from "@site/src/1stblue-theme/common-layout";
import { CommonHeader } from "@site/src/1stblue-theme/common-header";
import { LandingFooter } from "@site/src/1stblue-theme/landing-footer";

const ConnectorsLayout = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <CommonLayout>
            <Head title="连接器 | bluepipe">
                <html data-page="connectors" data-customized="true" />
            </Head>
            <div className={clsx("refine-prose, pb-16")}>
                <CommonHeader hasSticky />
                <div
                    className={clsx(
                        "max-w-[944px]",
                        "mx-auto",
                        "pt-16 px-4 sm:px-6",
                    )}
                >
                    {children}
                </div>
            </div>
            <LandingFooter />
        </CommonLayout>
    );
};

export default ConnectorsLayout;
