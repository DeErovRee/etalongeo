import { apiURL } from "./urlAPI";

export async function getData(
    endpoint: string,
    pageSize: number,
    pageCount: number,
    sortName: string,
    sortDir: string
) {
    const res: any = await fetch(
        `${apiURL}/${endpoint}?pagination[pageSize]=${pageSize}&pagination[page]=${pageCount}&sort=${sortName}${sortDir}&populate=*`
    );

    return res.json();
}
