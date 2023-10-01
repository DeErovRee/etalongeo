import { Header } from "@/components/header";
import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import bgImage from "../public/bg1.jpg";
import { Footer } from "@/components/footer";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ЭталонGEO",
    description: "Межевание, Технические планы",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                {/* <script src="//code.jivo.ru/widget/spZbhZ8Ytu" async></script> */}
            </Head>
            <body
                className={inter.className}
                style={{
                    height: "100vh",
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
