import { ServiceCard } from "@/components/MainPage/serviceCard";
import { getData } from "@/utils/getData";
import { Box, Container, Typography } from "@mui/material";
import { News, Newses } from "../services/page";
import { LocalhostURL as URL } from "@/utils/URL";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ЭталонGEO | Блог",
    description: "Полезные стать и новости",
};

export default async function Blog() {
    const news: Newses = await getData("newses", 10, 1, "date", ":desc");
    return (
        <Container>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "white",
                    margin: "45px 0 15px",
                }}
            >
                Новости
            </Typography>
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
