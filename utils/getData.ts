import { Newses } from "@/app/services/page";
import { LocalhostAPIurl as apiURL } from "./URL";

export async function getData(
    endpoint: string,
    pageSize: number,
    pageCount: number,
    sortName: string,
    sortDir: string
): Promise<Newses | null> {
    try {
        const res = await fetch(
            `${apiURL}/${endpoint}?pagination[pageSize]=${pageSize}&pagination[page]=${pageCount}&sort=${sortName}${sortDir}&populate=*`,
            {
                next: {
                    revalidate: 10,
                },
            }
        );

        return res.json();
    } catch (e) {
        return null;
    }
}
