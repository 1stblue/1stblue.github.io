export type ConnectorsType = {
    [key: string]: Connector[];
};

export type Connector = {
    name: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
    url?: string;
    status: string;
    contributors?: contributor[];
};

export type contributor = {
    name: string;
    url: string;
};
