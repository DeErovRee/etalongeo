import { MainSection1 } from "@/components/MainPage/mainSection1";
import { MainSection2 } from "@/components/MainPage/mainSection2";
import { MainSection4 } from "@/components/MainPage/mainSection4";
import { MainSection5 } from "@/components/MainPage/mainSection5";

export default async function Home() {
    return (
        <main>
            <MainSection1 />
            <MainSection2 />
            <MainSection4 />
            <MainSection5 />
        </main>
    );
}
