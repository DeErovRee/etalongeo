import { Newses } from "@/app/services/page";
import { LocalhostAPIurl as apiURL } from "./URL";

export async function getData(
    endpoint: string,
    pageSize: number,
    pageCount: number,
    sortName: string,
    sortDir: string
): Promise<Newses> {
    const res = await fetch(
        `${apiURL}/${endpoint}?pagination[pageSize]=${pageSize}&pagination[page]=${pageCount}&sort=${sortName}${sortDir}&populate=*`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    return res.json();
}
