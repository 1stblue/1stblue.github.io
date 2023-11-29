import React, { useEffect, useState } from "react";
import { CommonLayout } from "./common-layout";
import { CommonHeader } from "./common-header";
import { LandingFooter } from "./landing-footer";
import clsx from "clsx";
import { useLocation } from "@docusaurus/router";
import useScrollTracker from "../hooks/use-scroll-tracker";

export const RefineBlogLayout = (props: any) => {
    const [shouldShowBanner, setShouldShowBanner] = useState(false);
    const { children, toc, ...layoutProps } = props;
    const { pathname } = useLocation();

    const tracker = useScrollTracker();

    useEffect(() => {
        if (pathname === "/blog/" || pathname === "/blog") return;

        if (tracker.scrollY > 20) {
            setShouldShowBanner(true);
        }

        if (tracker.scrollY < 20) {
            setShouldShowBanner(false);
        }
    }, [tracker.scrollY]);

    return (
        <CommonLayout {...layoutProps}>
            <CommonHeader hasSticky={true} trackProgress={!!toc} />
            <div
                className={clsx(
                    "flex",
                    "justify-center",
                    "mx-auto",
                    "max-w-screen-blog-max",
                    "w-full",
                )}
            >
               
                <div
                    className={clsx(
                        "refine-prose",
                        "flex-1",
                        "min-w-0",
                        "xl:px-8",
                    )}
                >
                    {children}
                </div>
                {toc && (
                    <div
                        className={clsx(
                            "w-[280px]",
                            "hidden blog-md:block",
                            "flex-shrink-0",
                        )}
                    >
                        {toc}
                    </div>
                )}
            </div>
            <LandingFooter />
            {/* <BannerModal /> */}
        </CommonLayout>
    );
};
