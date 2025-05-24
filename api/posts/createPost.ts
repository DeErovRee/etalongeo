import { CreateBody, Posts, PostsQuery } from "../types/posts";

export async function createPost({
    title,
    content,
}: CreateBody): Promise<Posts | null> {
    try {
        // Доделать, передавать данные для создания
        const res = await fetch(`http://195.133.73.116:3000/api/posts/`, {
            next: {
                revalidate: 10,
            },
        });

        return res.json();
    } catch (e) {
        return null;
    }
}
