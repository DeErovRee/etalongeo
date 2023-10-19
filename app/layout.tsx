import { Header } from "@/components/header";
import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import bgImage from "../public/bg1.jpg";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { LocalhostURL as URL } from "@/utils/URL";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ЭталонGEO",
    icons: `${URL}/public/unnamed.png`,
    description: "Межевание, Технические планы",
    category: "Кадастровые работы",
    openGraph: {
        type: "website",
        url: URL,
        title: "EtalonGEO",
        description: "Предоставляем кадастровые услуги любой сложности",
        siteName: "EtalonGEO",
        locale: "ru",
    },
    creator: "Денис Нестеров",
    publisher: "beget",
    keywords:
        "etalongeo, кадастровый инженер, межевание, комплексные кадастровые работы, кадастр недвижимости, межевание земельного участка, межевание цена",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Script>
                <script src="//code.jivo.ru/widget/spZbhZ8Ytu" async></script>
            </Script>
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
