import MDXComponents from "@theme-original/MDXComponents";

import DiscordBanner from "@site/src/components/blog/discord-banner";
import GithubBanner from "@site/src/components/blog/github-banner";
import PromotionBanner from "@site/src/components/blog/promotion";
import TwitterBanner from "@site/src/components/blog/twitter-banner";
import GeneralConceptsLink from "@site/src/components/general-concepts-link";
import { GlobalConfigBadge } from "@site/src/components/global-config-badge";
import { GuideBadge } from "@site/src/components/guide-badge";
import PropTag from "@site/src/components/prop-tag";
import { RouterBadge } from "@site/src/components/router-badge";
import CommonDetails from "@site/src/1stblue-theme/common-details";
import CommonSummary from "@site/src/1stblue-theme/common-summary";
import CommonTabItem from "@site/src/1stblue-theme/common-tab-item";
import CommonTabs from "@site/src/1stblue-theme/common-tabs";

export default {
    ...MDXComponents,
    DiscordBanner: DiscordBanner,
    GithubBanner: GithubBanner,
    TwitterBanner: TwitterBanner,
    PropTag: PropTag,
    details: CommonDetails,
    summary: CommonSummary,
    PromotionBanner: PromotionBanner,
    Tabs: CommonTabs,
    TabItem: CommonTabItem,
    GeneralConceptsLink,
    GuideBadge,
    RouterBadge,
    GlobalConfigBadge,
};
