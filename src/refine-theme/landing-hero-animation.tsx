import clsx from "clsx";
import { useInView } from "framer-motion";
import React from "react";
import {
    LandingHeroBeamGlowSvg,
    LandingHeroBeamSvg,
} from "./icons/landing-hero-beam";
import { LandingHeroCenterSvg } from "./icons/landing-hero-center";
import { LandingHeroGridSvg } from "./icons/landing-hero-grid";
import { LandingHeroAntdIcon } from "./icons/landing-hero/antd";
import { LandingHeroAppwriteIcon } from "./icons/landing-hero/appwrite";
import { LandingHeroAuth0Icon } from "./icons/landing-hero/auth0";
import { LandingHeroChakraUIIcon } from "./icons/landing-hero/chakra";
import { LandingHeroGoogleIcon } from "./icons/landing-hero/google";
import { LandingHeroMaterialUIIcon } from "./icons/landing-hero/material-ui";
import { LandingHeroNestjsIcon } from "./icons/landing-hero/nestjs";
import { LandingHeroNextjsIcon } from "./icons/landing-hero/nextjs";
import { LandingHeroOktaIcon } from "./icons/landing-hero/okta";
import { LandingHeroRemixIcon } from "./icons/landing-hero/remix";
import { LandingHeroSupabaseIcon } from "./icons/landing-hero/supabase";
import { LandingHeroHiveIcon } from "./icons/landing-hero/hive";
import { LandingHeroKafkaIcon } from "./icons/landing-hero/kafka";
import { LandingHeroAnimationItem } from "./landing-hero-animation-item";
import { LandingHeroMongoDBIcon } from "./icons/landing-hero/mongodb";
import { LandingHeroMySQLIcon } from "./icons/landing-hero/mysql";
import { LandingHeroOracleIcon } from "./icons/landing-hero/oracle";
import { LandingHeroPostgresSQLIcon } from "./icons/landing-hero/postgresql";
import { LandingHeroYMatrixIcon } from "./icons/landing-hero/ymatrix";

type ItemType = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    name: string;
    color: string;
    rayClassName?: string;
};

const platformItems: ItemType[] = [
    {
        name: "Apache Hive",
        icon: LandingHeroHiveIcon,
        color: "#faef56",
    },
    {
        name: "Apache Kafka",
        icon: LandingHeroKafkaIcon,
        color: "#000",
    },
    {
        name: "MongoDB",
        icon:LandingHeroMongoDBIcon,
        color: "#679444",
    },
    {
        name: "MySQL",
        icon: LandingHeroMySQLIcon,
        color: "#007FFF",
    },
    {
        name: "Oracle Database",
        icon: LandingHeroOracleIcon,
        color: "#ea3323",
    },
    {
        name: "PostgreSQL",
        icon: LandingHeroPostgresSQLIcon,
        color: "#3c5f8e",
    },
    {
        name: "YMatrix",
        icon: LandingHeroYMatrixIcon,
        color: "#3d78e5",
    },
];


export const LandingHeroAnimation = React.memo(function HeroAnimation() {
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
    const [activePlatform, setActivePlatform] = React.useState(0);
    const [activeUI, setActiveUI] = React.useState(1);
    const [activeBackend, setActiveBackend] = React.useState(2);
    const [activeAuth, setActiveAuth] = React.useState(3);

    React.useEffect(() => {
        if (inView) {
            let t1: NodeJS.Timeout | null = null;
            let t2: NodeJS.Timeout | null = null;
            let t3: NodeJS.Timeout | null = null;

            const interval = setInterval(() => {
                if (t1) clearTimeout(t1);
                if (t2) clearTimeout(t2);
                if (t3) clearTimeout(t3);

                setActivePlatform((prev) => (prev + 1) % platformItems.length);
                t1 = setTimeout(() => {
                    setActiveUI((prev) => (prev + 2) % platformItems.length);
                }, 2000);
                t2 = setTimeout(() => {
                    setActiveBackend(
                        (prev) => (prev + 3) % platformItems.length,
                    );
                }, 4000);
                t3 = setTimeout(() => {
                    setActiveAuth((prev) => (prev + 4) % platformItems.length);
                }, 6000);
            }, 8000);

            return () => {
                clearInterval(interval);
                if (t1) clearTimeout(t1);
                if (t2) clearTimeout(t2);
                if (t3) clearTimeout(t3);
            };
        }
    }, [inView]);

    return (
        <div ref={ref} className={clsx()}>
            <div className={clsx("relative", "w-min")}>
                <LandingHeroGridSvg
                    className={clsx(
                        "w-[404px]",
                        "h-[360px]",
                        "landing-lg:w-[690px]",
                        "landing-lg:h-[480px]",
                        "left-0",
                        "top-0",
                        "bottom-0",
                        "right-0",
                    )}
                />
                <LandingHeroCenterSvg
                    className={clsx(
                        "absolute",
                        "left-1/2 top-1/2",
                        "-translate-x-1/2 -translate-y-1/2",
                        "z-[1]",
                    )}
                />
                <div
                    className={clsx(
                        "hidden",
                        "landing-lg:flex",
                        "absolute",
                        "left-0",
                        "top-0",
                        "bottom-0",
                        "right-0",
                        "w-full",
                        "h-full",
                        "py-12",
                        "px-[89px]",
                        "flex-col",
                        "items-start",
                        "justify-between",
                    )}
                >
                    <div
                        className={clsx(
                            "w-full",
                            "flex",
                            "items-start",
                            "justify-between",
                        )}
                    >
                        <LandingHeroAnimationItem
                            vertical="top"
                            horizontal="left"
                            section={"react platform"}
                            {...platformItems[activePlatform]}
                            previousName={
                                platformItems[
                                    (activePlatform -
                                        1 +
                                        platformItems.length) %
                                        platformItems.length
                                ].name ?? platformItems[activePlatform].name
                            }
                        />
                        <LandingHeroAnimationItem
                            vertical="top"
                            horizontal="right"
                            section="ui framework"
                            {...platformItems[activeUI]}
                            previousName={
                                platformItems[
                                    (activeUI - 1 + platformItems.length) %
                                        platformItems.length
                                ].name ?? platformItems[activeUI].name
                            }
                        />
                    </div>
                    <div
                        className={clsx(
                            "mt-auto",
                            "w-full",
                            "flex",
                            "items-end",
                            "justify-between",
                        )}
                    >
                        <LandingHeroAnimationItem
                            vertical="bottom"
                            horizontal="left"
                            section="backend"
                            {...platformItems[activeBackend]}
                            previousName={
                                platformItems[
                                    (activeBackend - 1 + platformItems.length) %
                                        platformItems.length
                                ].name ?? platformItems[activeBackend].name
                            }
                        />
                        <LandingHeroAnimationItem
                            vertical="bottom"
                            horizontal="right"
                            section="authentication"
                            {...platformItems[activeAuth]}
                            previousName={
                                platformItems[
                                    (activeAuth - 1 + platformItems.length) %
                                        platformItems.length
                                ].name ?? platformItems[activeAuth].name
                            }
                        />
                    </div>
                </div>
                <LandingHeroBeamSvg
                    className={clsx(
                        "z-[0]",
                        "absolute",
                        "left-1/2",
                        "top-2/3",
                        "scale-y-125",
                        "-translate-x-1/2",
                        "translate-y-0",
                        "landing-lg:translate-y-16",
                        "dark:animate-landing-hero-beam-line",
                    )}
                />
                <LandingHeroBeamGlowSvg
                    className={clsx(
                        "z-[0]",
                        "absolute",
                        "left-1/2",
                        "top-2/3",
                        "scale-y-125",
                        "-translate-x-1/2",
                        "translate-y-0",
                        "landing-lg:translate-y-16",
                        "blur-sm",
                        "dark:animate-landing-hero-beam-glow",
                    )}
                    style={{
                        fillOpacity: 0,
                        filter: "drop-shadow(rgba(71, 235, 235,0.1) 0px 0px 0px) drop-shadow(rgba(71, 235, 235,0.15) 0px 0px 10px)",
                    }}
                />
                <div
                    className={clsx(
                        "-mt-6",
                        "pt-6",
                        "px-6",
                        "overflow-hidden",
                        "absolute",
                        "left-1/2",
                        "-translate-x-1/2",
                        "top-full",
                        "landing-lg:top-[calc(50%+110px)]",
                        "translate-y-80",
                        "z-[1]",
                    )}
                >
                    <div
                        className={clsx(
                            "-mt-px landing-lg:mt-0",
                            "relative",
                            "w-40",
                            "h-px",
                            "bg-landing-hero-beam-bottom-light dark:bg-landing-hero-beam-bottom",
                            "animate-landing-hero-beam-bottom",
                        )}
                    ></div>
                </div>
            </div>
        </div>
    );
});
