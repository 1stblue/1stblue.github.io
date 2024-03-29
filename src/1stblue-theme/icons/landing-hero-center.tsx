import React from "react";

export const LandingHeroCenterSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={128}
            height={128}
            fill="none"
            {...props}
        >
      
            <image
                className="block"
                href="/img/logo.svg"
                x={0}
                y={0}
                width={128}
                height={128}
            />
        </svg>
    </>
);
