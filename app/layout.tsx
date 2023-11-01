import { Header } from "@/components/header";
import Image from "next/image";
import "./globals.css";
import { YandexMetrika } from "@/utils/YandexMetrika";
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
                <Script id="metrika-counter" strategy="afterInteractive">
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
                    ym(95364381, "init", {
                        defer: true,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });`}
                </Script>
                <YandexMetrika />
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/95364381"
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
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
