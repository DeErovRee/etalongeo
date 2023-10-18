import { LocalhostAPIurl as URL } from "./URL";

export async function getDataPost(id: string, endpoint: string) {
    const res = await fetch(`${URL}/${endpoint}/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    return res.json();
}
