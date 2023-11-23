import React from "react";
import Layout from "@theme/Layout";
import { DocPageLayout as RefineDocPageLayout } from "@site/src/1stblue-theme/doc-page-layout";

export default function DocPageLayout({ children }) {
    return (
        <Layout>
            <RefineDocPageLayout>{children}</RefineDocPageLayout>
        </Layout>
    );
}
