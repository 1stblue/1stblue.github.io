import Link from "@docusaurus/Link";
import { contributor } from "@site/src/types/connectors";
import clsx from "clsx";
import React from "react";

type LargeCardProps = {
    title: string;
    description: Element;
    linkUrl: string;
    icon: string;
    // icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Card: React.FC<LargeCardProps> = ({
    title,
    description,
    icon,
    linkUrl,
}) => {
    return (
        <Link
            // target="_blank"
            to={linkUrl}
            className={clsx(
                "flex gap-4 sm:gap-8",
                "no-underline",
                "p-4 sm:p-8",
                "border border-gray-200 dark:border-gray-700",
                "rounded-2xl",
            )}
            rel="noreferrer"
        >
            <div className={clsx()}>
                {/* <Icon className={clsx("w-6 h-6 sm:w-12 sm:h-12")} /> */}
                <img
                src={icon}
                loading="lazy"
                className={clsx("w-6 h-6 sm:w-12 sm:h-12")}
            />
            </div>

            <div className={clsx("flex flex-col gap-2")}>
                <div
                    className={clsx(
                        "text-gray-700 dark:text-gray-200",
                        "font-semibold",
                    )}
                >
                    {title}
                </div>
                <div
                    className={clsx(
                        "text-gray-600 dark:text-gray-300",
                        "text-xs sm:text-sm",
                    )}
                    // dangerouslySetInnerHTML={{ __html: description }}
                >{description}</div>
               
            </div>
        </Link>
    );
};

export default Card;
