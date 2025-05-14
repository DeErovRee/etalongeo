import { Posts, PostsQuery } from "../types/posts";

export async function getPosts({
    filter,
    options,
}: PostsQuery): Promise<Posts | null> {
    try {
        const res = await fetch(`http://195.133.73.116:3000/api/posts`, {
            next: {
                revalidate: 10,
            },
        });

        return res.json();
    } catch (e) {
        return null;
    }
}
