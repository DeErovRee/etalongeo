import { MainSection1 } from "@/components/MainPage/mainSection1";
import { ServiceMainSection } from "@/components/MainPage/ServiceMainSection";
import { PostMainSection } from "@/components/MainPage/PostMainSection";
import { FeedbackMainSection } from "@/components/MainPage/FeedbackMainSection";

export default async function Home() {
    return (
        <main>
            <MainSection1 />
            <ServiceMainSection />
            <PostMainSection />
            <FeedbackMainSection />
        </main>
    );
}
