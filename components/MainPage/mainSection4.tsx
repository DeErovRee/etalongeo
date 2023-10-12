import { Container, Typography, Button } from "@mui/material";
import { ServiceCard } from "./serviceCard";
import { getData } from "@/utils/getData";
import { News, Newses } from "@/app/services/page";
import { LocalhostURL as URL } from "@/utils/URL";
import Link from "next/link";

export async function MainSection4() {
    const news: Newses = await getData("newses", 4, 1, "date", ":desc");
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
                }}
            >
                {news.data.map((el: News) => {
                    return (
                        <ServiceCard
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
            </Container>
            <Button
                variant="contained"
                sx={{
                    mb: "117px",
                }}
            >
                <Link
                    href={"./blog"}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    Все новости
                </Link>
            </Button>
        </Container>
    );
}
