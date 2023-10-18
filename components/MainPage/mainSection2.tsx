import { Container, Typography, Button } from "@mui/material";
import { ServiceCard } from "./serviceCard";
import { getData } from "@/utils/getData";
import { LocalhostURL as URL } from "@/utils/URL";
import Link from "next/link";
import { MuiTypoH1 } from "../MuiComponents/MuiTypoH1";
import { MuiTypoH2 } from "../MuiComponents/MuiTypoH2";
import { MuiTypoH3 } from "../MuiComponents/MuiTypoH3";

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
                <MuiTypoH2
                    mDesktop="115px 0 10px"
                    mTablet="100px 0 10px"
                    mMobile="90px 0 10px"
                    color="black"
                >
                    Популярные услуги
                </MuiTypoH2>
                <MuiTypoH3
                    mDesktop="0 0 70px"
                    mTablet="0 0 60px"
                    mMobile="0 0 50px"
                    color="black"
                    // variant="h5"
                    // component="h5"
                    // sx={{
                    //     display: { s: "flex" },
                    //     textAlign: "center",
                    //     fontFamily: "inherit",
                    //     fontSize: "16px",
                    //     fontWeight: 700,
                    //     lineHeight: "24px",
                    //     color: "black",
                    //     textDecoration: "none",
                    //     mb: "70px",
                    // }}
                >
                    Мы предлагаем полный спектр услуг по кадастровым работам
                </MuiTypoH3>
            </Container>
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
                {services.data.map((el: Service) => {
                    return (
                        <ServiceCard
                            key={el.id}
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

            <Link
                href={"./services"}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "117px",
                }}
            >
                <Button variant="contained">Все услуги</Button>
            </Link>
        </Container>
    );
};
