import { Services, ServicesQuery } from "../types/services";

export async function getServices({
    filter,
    options,
}: ServicesQuery): Promise<Services | null> {
    try {
        const res = await fetch(`http://localhost:3000/api/services`, {
            next: {
                revalidate: 10,
            },
        });

        return res.json();
    } catch (e) {
        return null;
    }
}
