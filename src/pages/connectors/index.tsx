import clsx from "clsx";
import React, { useMemo } from "react";

import ConnectorsLayout from "@site/src/components/integrations/layout";
import { Connector } from "@site/src/types/connectors";
import Card from "../../components/integrations/card";

const List = ({ data }: { data: Connector[] }) => {
    return (
        <div
            className={clsx(
                "grid",
                "grid-cols-1 lg:grid-cols-2",
                "gap-8",
                "mt-8",
            )}
        >
            {data.map((item) => (
                <Card
                    key={item.name}
                    title={item.name}
                    description={item.description}
                    linkUrl={item.url}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};

const Connectors: React.FC = () => {


    return (
        <ConnectorsLayout>
            <div className={clsx("max-w-[624px]")}>
                <div
                    className={clsx(
                        "font-semibold",
                        "text-gray-700 dark:text-gray-200",
                        "text-xl sm:text-[40px] sm:leading-[56px]",
                    )}
                >
                    连接器
                </div>
                <div
                    className={clsx(
                        "font-semibold",
                        "text-gray-700 dark:text-gray-300",
                        "text-xs sm:text-base",
                        "mt-4 sm:mt-8",
                    )}
                >
                  20+高质量连接器，可扩展性强
                </div>
            </div>

            <div
                className={clsx(
                    "my-10",
                    "border-b border-gray-200 dark:border-gray-700",
                )}
            />

            <List data={[]} />

        </ConnectorsLayout>
    );
};

export default Connectors;
