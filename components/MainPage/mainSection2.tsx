import { Container, Typography, Button } from "@mui/material";
import { ServiceCard } from "./serviceCard";
import { getData } from "@/utils/getData";
import { LocalhostURL as URL } from "@/utils/URL";
import Link from "next/link";

export interface Services {
    data: Array<Service>;
}

export type Service = {
    id: number;
    attributes: {
        title: string;
        text: string;
        poster: {
            data: {
                attributes: {
                    formats: {
                        thumbnail: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
};

export const MainSection2 = async () => {
    const services: Services = await getData(
        "services",
        4,
        1,
        "title",
        ":desc"
    );
    console.log(services);
    return (
        <Container
            maxWidth={false}
            sx={{
                p: "0",
                backgroundColor: "white",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    id="services"
                    variant="h2"
                    component="h2"
                    sx={{
                        m: "115px 0 10px",
                        display: { xs: "none", md: "flex" },
                        textAlign: "center",
                        fontFamily: "inherit",
                        fontSize: "45px",
                        fontWeight: 700,
                        lineHeight: "40px",
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    Популярный услуги
                </Typography>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        textAlign: "center",
                        fontFamily: "inherit",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        color: "black",
                        textDecoration: "none",
                        mb: "70px",
                    }}
                >
                    Мы предлагаем полный спектр услуг по кадастровым работам
                </Typography>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "row" }}>
                {services.data.map((el: Service) => {
                    return (
                        <ServiceCard
                            endpoint="services"
                            title={el.attributes.title}
                            description={el.attributes.text}
                            img={
                                URL +
                                el.attributes.poster.data.attributes.formats
                                    .thumbnail.url
                            }
                            id={2}
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
                    href={"./services"}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    Все услуги
                </Link>
            </Button>
        </Container>
    );
};
