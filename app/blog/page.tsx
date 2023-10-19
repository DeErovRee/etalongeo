import { ServiceCard } from "@/components/MainPage/serviceCard";
import { getData } from "@/utils/getData";
import { Box, Container } from "@mui/material";
import { News, Newses } from "../services/page";
import { LocalhostURL as URL } from "@/utils/URL";
import { Metadata } from "next";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";

export const metadata: Metadata = {
    title: "ЭталонGEO | Блог",
    description: "Полезные стать и новости",
};

export default async function Blog() {
    const news: Newses = await getData("newses", 10, 1, "date", ":desc");
    return (
        <Container>
            <MuiTypoH1
                mDesktop="45px 0 15px"
                mTablet=""
                mMobile=""
                color="white"
            >
                Новости
            </MuiTypoH1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {news.data.map((el: News) => {
                    return (
                        <ServiceCard
                            key={el.id}
                            endpoint="blog"
                            id={el.id}
                            title={el.attributes.title}
                            description={el.attributes.text}
                            img={
                                URL +
                                el.attributes.poster.data.attributes.formats
                                    .thumbnail.url
                            }
                        />
                    );
                })}
            </Box>
        </Container>
    );
}
