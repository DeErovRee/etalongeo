import { ServiceCard } from "@/components/MainPage/serviceCard";
import { getData } from "@/utils/getData";
import { Box, Container, Typography } from "@mui/material";

const apiURL = "http://31.129.108.132:1337";

export default async function Services() {
    const news: any = await getData("newses", 10, 1, "date", ":desc");
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
                {news.data.map((el: any) => {
                    return (
                        <ServiceCard
                            endpoint="blog"
                            id={el.id}
                            title={el.attributes.title}
                            description={el.attributes.text}
                            img={
                                apiURL +
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
