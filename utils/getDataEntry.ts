import { LocalhostAPIurl as URL } from "./URL";

export async function getDataPost(id: string, endpoint: string) {
    const res = await fetch(`${URL}/${endpoint}/${id}?populate=*`, {
        next: {
            revalidate: 1,
        },
    });

    return res.json();
}
