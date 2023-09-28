import { Container, Typography } from "@mui/material";
import { ServiceCard } from "./serviceCard";
import { getData } from "@/utils/getData";

const APIurl = "http://127.0.0.1:1337";

export async function MainSection4() {
    const news = await getData("newses", 4, 1, "date", ":desc");
    return (
        <Container
            maxWidth={false}
            sx={{
                p: "0",
                backgroundColor: "white",
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    display: { xs: "none", md: "flex" },
                    textAlign: "center",
                    fontFamily: "inherit",
                    fontSize: "26px",
                    fontWeight: 700,
                    lineHeight: "35px",
                    color: "black",
                    textDecoration: "none",
                    m: "45px 0 20px",
                }}
            >
                Последние новости
            </Typography>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    mb: "117px",
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
                                APIurl +
                                el.attributes.poster.data.attributes.formats
                                    .thumbnail.url
                            }
                        />
                    );
                })}
            </Container>
        </Container>
    );
}
