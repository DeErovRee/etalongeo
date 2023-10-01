import { apiURL } from "./urlAPI";

export async function getDataSome(id: string) {
    const res = await fetch(`${apiURL}/newses/${id}`, {
        next: {
            revalidate: 600,
        },
    });

    return res.json();
}
