import { LocalhostAPIurl as URL } from "./URL";

interface SEO {
    data: {
        id: number;
        attributes: {
            title: string;
            description: string;
            category: string;
            publisher: string;
            keywords: string;
            icons: string;
            openGraph: {
                id: number;
                title: string;
                url: string;
                description: string;
                siteName: string;
                locale: string;
                type: string;
            };
        };
    };
}

export async function GetMetadata(): Promise<SEO> {
    const res = await fetch(`${URL}/seo?populate=openGraph`);

    return res.json();
}
