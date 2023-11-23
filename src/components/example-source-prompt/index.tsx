import React from "react";
import { CommonShowSourcePrompt } from "../../1stblue-theme/common-show-source-prompt";

type Props = {
    path: string;
};

const ExampleSourcePrompt: React.FC<Props> = ({ path }) => {
    const REPO_TREE_URL = "https://github.com/1stblue/1stblue.github.io/tree";

    const SOURCE_URL = `${REPO_TREE_URL}/master/examples/${path}`;

    return <CommonShowSourcePrompt path={SOURCE_URL} />;
};

export default ExampleSourcePrompt;
