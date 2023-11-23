import isInternalUrl from "@docusaurus/isInternalUrl";
/**
 * This function will generate rel attribute for links.
 * @param {string} URL to be dest for link
 */
export const getLinkRel = (URL?: string): string => {
    let rel = "noopener noreferrer nofollow";

    const isInternalURL = isInternalUrl(URL);

    if (URL?.includes("github.com/1stblue/1stblue.github.io")) {
        rel = "noopener";
    }

    if (isInternalURL || URL?.includes("1stblue.cloud")) {
        rel = "noopener dofollow";
    }

    if (isInternalURL || URL?.includes("1stblue.cloud")) {
        rel = "noopener dofollow";
    }

    return rel;
};
