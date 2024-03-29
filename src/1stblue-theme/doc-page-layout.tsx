import clsx from "clsx";
import React from "react";
import { CommonFooter } from "./common-footer";
import { DocSidebar } from "./doc-sidebar";
import { CommonHeader } from "./common-header";

type Props = React.PropsWithChildren<{}>;

export const DocPageLayout = ({ children }: Props) => {
    return (
        <>
            <CommonHeader />
            <div
                className={clsx(
                    "flex items-start justify-start",
                    "w-full flex-1",
                    // "max-w-[1664px]",
                    "mx-auto",
                )}
            >
                <DocSidebar />
                {children}
            </div>
            <CommonFooter />
        </>
    );
};
