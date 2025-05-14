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

export type CreateBody = {
    title: string;
    content: string;
    price: number;
};

type Filter = {};

type Options = {
    limit?: number;
    offset?: number;
};
