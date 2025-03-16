export type Posts = Post[];

type Post = {
    id: number;
    title: string;
    content: string;
    attachments?: string;
};

export type PostsQuery = {
    filter?: Filter;
    options?: Options;
};

type Filter = {};

type Options = {
    limit?: number;
    offset?: number;
};
