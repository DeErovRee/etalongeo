export type Services = Service[];

type Service = {
    id: number;
    name: string;
    description: string;
    price: number;
};

export type ServicesQuery = {
    filter?: Filter;
    options?: Options;
};

type Filter = {};

type Options = {
    limit?: number;
    offset?: number;
};
