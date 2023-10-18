import { Container, Typography, Button } from "@mui/material";
import { ServiceCard } from "./serviceCard";
import { getData } from "@/utils/getData";
import { News, Newses } from "@/app/services/page";
import { LocalhostURL as URL } from "@/utils/URL";
import Link from "next/link";
import { MuiTypoH1 } from "../MuiComponents/MuiTypoH1";
import { MuiTypoH2 } from "../MuiComponents/MuiTypoH2";

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
            <MuiTypoH2
                mDesktop="45px 0 20px"
                mTablet="40px 0 17px"
                mMobile="35px 0 15px"
                color="black"
            >
                Последние новости
            </MuiTypoH2>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "center",
                    "@media (max-width: 955px)": {
                        flexWrap: "wrap",
                    },
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
