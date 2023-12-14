import clsx from "clsx";
import React from "react";
import { TriangleDownIcon } from "./icons/triangle-down";

export const CommonSummary = ({ children, className, ...props }) => {
    return (
        <summary
            className={clsx(
                "bg-gray-50",
                "p-2",
                "flex items-center gap-2",
                "before:hidden",
                "-mb-px",
            )}
            {...props}
        >
            <div
                className={clsx("w-8 h-8", "flex items-center justify-center")}
            >
                <TriangleDownIcon
                    className={clsx("bluepipe-details-triangle", "text-gray-500")}
                />
            </div>
            <span className="text-gray-900">{children}</span>
        </summary>
    );
};

export default CommonSummary;
