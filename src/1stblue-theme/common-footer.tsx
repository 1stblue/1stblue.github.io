import clsx from "clsx";
import React from "react";

export const CommonFooter = () => {
    return (
        <footer
            className={clsx(
                "py-5",
                "px-6",
                "dark:bg-gray-800 bg-gray-100",
                "border-t dark:border-t-gray-700 border-t-gray-100",
            )}
        >
            <div
                className={clsx(
                    // "max-w-[1644px]",
                    "mx-auto",
                    "flex w-full items-center justify-between",
                    "flex-col-reverse sm:flex-row",
                )}
            >
                <div
                    className={clsx(
                        "text-base",
                        "font-light",
                        "dark:text-gray-400 text-gray-700",
                        "mt-4 sm:mt-0",
                    )}
                >
                    Bluepipe © 2023
                </div>
            </div>
        </footer>
    );
};
