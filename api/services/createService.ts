import { CreateBody, Services } from "../types/services";

export async function createService({
    title,
    content,
    price,
}: CreateBody): Promise<Services | null> {
    try {
        // Доделать, передавать данные для создания
        const res = await fetch(`http://195.133.73.116:3000/api/services`, {
            next: {
                revalidate: 10,
            },
        });

        return res.json();
    } catch (e) {
        return null;
    }
}
