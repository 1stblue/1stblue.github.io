export type ConnectorsType = {
    [key: string]: Connector[];
};

export type Connector = {
    name: string;
    id: string;
    icon: string;
    description: string;
    url?: string;
    status: string;
    contributors?: contributor[];
};

export type contributor = {
    name: string;
    url: string;
};
