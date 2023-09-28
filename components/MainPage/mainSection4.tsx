import { Container, Typography } from "@mui/material";
import { ServiceCard } from "./serviceCard";
import Link from "next/link";

const APIurl = "http://127.0.0.1:1337";

async function getData() {
    const res = await fetch(
        `${APIurl}/api/newses?pagination[page]=1&pagination[pageSize]=4&populate=*`
    );

    return res.json();
}

export async function MainSection4() {
    const news = await getData();
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
