import clsx from "clsx";
import React from "react";
import { openFigma } from "../utils/open-figma";
import { menuItems, secondaryMenuItems } from "./footer-data";
import { HeartOutlinedIcon } from "./icons/heart-outlined";
import Link from "@docusaurus/Link";
import { BluepipeLogoIcon } from "./icons/1stblue-logo";
import { PHBadgeIcon } from "./icons/ph-badge";

export const LandingFooter = () => {
    const info = (
        <div
            className={clsx(
                "py-6 landing-lg:py-0",
                "flex",
                "flex-col",
                "gap-4",
                "landing-lg:max-w-[224px]",
            )}
        >
            <div
                className={clsx(
                    "font-semibold",
                    "text-sm",
                    "leading-6",
                    "text-gray-900 dark:text-gray-0",
                )}
            >
                关于萃蓝
            </div>
            <div
                className={clsx(
                    "font-normal",
                    "text-sm",
                    "leading-5",
                    "text-gray-600 dark:text-gray-400",
                )}
            >
                有团队、有钱、有三方认证
            </div>
            
        </div>
    );


    return (
        <footer className={clsx("w-full")}>
            <div
                className={clsx(
                    "border-t border-t-solid",
                    "border-t-gray-100 dark:border-t-gray-700",
                    "dark:bg-footer-dark-bg",
                )}
            >
                <div
                    className={clsx(
                        "grid",
                        "grid-cols-1",
                        "max-w-screen-landing-md",
                        "landing-lg:max-w-screen-landing-lg",
                        "mx-auto",
                    )}
                >
                    <div
                        className={clsx(
                            "px-4 landing-sm:px-8 landing-lg:px-12",
                            "py-6 landing-lg:pt-8 landing-lg:pb-12",
                            "flex",
                            "flex-row",
                            "flex-wrap",
                            "items-start",
                            "justify-start",
                            "gap-6",
                        )}
                    >
                        <div
                            className={clsx(
                                "hidden",
                                "landing-lg:flex",
                                "max-w-[282px]",
                                "w-full",
                            )}
                        >
                            {info}
                        </div>
                        {menuItems.map((menu) => (
                            <div
                                className={clsx(
                                    "flex flex-col gap-4",
                                    "min-w-[152px]",
                                )}
                                key={menu.label}
                            >
                                <div
                                    className={clsx(
                                        "text-sm",
                                        "leading-6",
                                        "font-semibold",
                                        "text-gray-900 dark:text-gray-0",
                                    )}
                                >
                                    {menu.label}
                                </div>
                                <div
                                    className={clsx(
                                        "flex",
                                        "flex-col",
                                        "gap-2",
                                    )}
                                >
                                    {menu.items.map((item) => (
                                        <a
                                            href={item.href}
                                            key={item.label}
                                            {...(item.href.startsWith("http")
                                                ? {
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                  }
                                                : {})}
                                            className={clsx(
                                                "text-sm",
                                                "leading-5",
                                                "hover:no-underline",
                                                "text-gray-600 dark:text-gray-400",
                                                "hover:text-gray-800 dark:hover:text-gray-300",
                                            )}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={clsx(
                            "px-4 landing-sm:px-8",
                            "grid",
                            "grid-cols-1",
                            "landing-sm:grid-cols-2",
                            "landing-sm:gap-8",
                            "landing-lg:hidden",
                        )}
                    >
                        {info}
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    "border-t border-t-solid",
                    "border-t-gray-100 dark:border-t-gray-700",
                    "bg-gray-50 dark:bg-gray-800",
                )}
            >
                <div
                    className={clsx(
                        "py-6 landing-sm:py-8 landing-lg:py-6",
                        "px-4 landing-sm:px-8 landing-lg:px-12",
                        "grid",
                        "grid-cols-1",
                        "landing-md:grid-cols-2",
                        "gap-8",
                        "max-w-screen-landing-md",
                        "landing-lg:max-w-screen-landing-lg",
                        "mx-auto",
                    )}
                >
                    <div
                        className={clsx(
                            "flex",
                            "flex-col",
                            "landing-sm:flex-row",
                            "gap-4",
                            "items-start",
                            "justify-start",
                        )}
                    >
                        {/* {secondaryMenuItems.map((menu) => (
                            <a
                                href={menu.href}
                                key={menu.label}
                                {...(menu.href.startsWith("http")
                                    ? {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                      }
                                    : {})}
                                className={clsx(
                                    "text-sm",
                                    "leading-5",
                                    "font-normal",
                                    "text-gray-600 dark:text-gray-400",
                                    "hover:no-underline",
                                    "hover:text-gray-800 dark:hover:text-gray-300",
                                )}
                            >
                                {menu.label}
                            </a>
                        ))} */}
                    </div>
                    <div
                        className={clsx(
                            "text-left",
                            "landing-md:text-right",
                            "text-sm",
                            "pr-6 landing-sm:pr-0",
                            "leading-5",
                            "text-gray-900 dark:text-gray-0",
                            "font-normal",
                        )}
                    >
                        {
                            "© 2023, Bluepipe from HangZhou to wherever you're with "
                        }
                        <HeartOutlinedIcon
                            className={clsx(
                                "ml-1",
                                "text-refine-red",
                                "inline",
                                "leading-5",
                            )}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};
