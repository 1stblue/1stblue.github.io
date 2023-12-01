import { useDoc, useDocsVersion } from "@docusaurus/theme-common/internal";
import DocItemContent from "@theme/DocItem/Content";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import clsx from "clsx";
import React from "react";
import { DocBreadcrumbs } from "./doc-breadcrumbs";
import { SourceCodeBadge } from "./doc-sourcecode-badge";
import { SwizzleBadge } from "./doc-swizzle-badge";
import { DocTOC } from "./doc-toc";
import { DocTOCMobile } from "./doc-toc-mobile";
import { DocVersionBadge } from "./doc-version-badge";

export const DocItemLayout = ({ children }) => {
    const {
        frontMatter: { swizzle, source },
    } = useDoc();
    const { badge, label } = useDocsVersion();

    return (
        <>
            <div
                className={clsx(
                    "flex-1",
                    "flex flex-col",
                    "items-center justify-start",
                    "px-2 sm:px-0 py-2 sm:py-6",
                    "relative",
                    "w-full",
                )}
            >
                <div className={clsx("max-w-screen-content w-full", "min-h-[calc(100vh-80px-64px-64px)]")}>
                    <DocVersionBanner />
                    <div className={clsx("flex flex-col", "mb-8")}>
                        {/* {tutorial?.isTutorial ? null : <DocBreadcrumbs />} */}
                        <DocBreadcrumbs />
                        <div
                            className={clsx(
                                "flex",
                                "flex-row",
                                "gap-2",
                                "items-center",
                            )}
                        >
                            {badge && <DocVersionBadge version={label} />}
                            {swizzle && <SwizzleBadge />}
                            {source && <SourceCodeBadge path={source} />}
                        </div>
                    </div>
                        <DocTOCMobile />
                    <div className={clsx("refine-prose")}>
                        <DocItemContent>{children}</DocItemContent>
                    </div>
                    <DocItemFooter />
                </div>
                <div className={clsx("max-w-screen-content", "w-full")}>
                    <DocItemPaginator />
                </div>
            </div>
            
                <DocTOC />
        </>
    );
};
