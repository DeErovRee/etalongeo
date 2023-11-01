import { Header } from "@/components/header";
import Image from "next/image";
import "./globals.css";
import YandexMetrika from "@/components/YandexMetrika";
import { Montserrat } from "next/font/google";
import bgImage from "../public/bg1.jpg";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { LocalhostURL as URL } from "@/utils/URL";
import { GetMetadata } from "@/utils/getMetadata";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"] });

export async function generateMetadata() {
    const SEO = (await GetMetadata()).data.attributes;

    return {
        metadataBase: `${URL}`,
        title: `${SEO.title}`,
        icons: `${SEO.icons}`,
        description: `${SEO.description}`,
        category: `${SEO.category}`,
        openGraph: {
            type: `${SEO.openGraph.type}`,
            url: `${SEO.openGraph.url}`,
            title: `${SEO.openGraph.title}`,
            description: `${SEO.openGraph.description}`,
            siteName: `${SEO.openGraph.siteName}`,
            locale: `${SEO.openGraph.locale}`,
        },
        creator: "Денис Нестеров",
        publisher: `${SEO.publisher}`,
        keywords: `${SEO.keywords}`,
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <Script>
                    <script
                        src="//code.jivo.ru/widget/spZbhZ8Ytu"
                        async
                    ></script>
                </Script>
                <YandexMetrika
                    yid={95364381}
                    clickmap={true}
                    trackLinks={true}
                    accurateTrackBounce={true}
                    webvisor={true}
                />
            </Head>

            <body
                className={inter.className}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Image
                    alt="Sattelite Photo"
                    src={bgImage}
                    placeholder="blur"
                    quality={100}
                    style={{
                        minHeight: "100vh",
                        width: "100%",
                        filter: "brightness(0.8)",
                        objectFit: "cover",
                        zIndex: "-1",
                        position: "fixed",
                    }}
                />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
