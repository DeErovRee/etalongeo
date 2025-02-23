import { Container, Button } from "@mui/material";
import { ServiceCard } from "../Cards/serviceCard";
import { getData } from "@/utils/getData";
import { LocalhostURL as URL } from "@/utils/URL";
import Link from "next/link";
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
        description: string;
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
                            description={el.attributes.description}
                            img={
                                URL +
                                el.attributes.poster.data.attributes.formats
                                    .thumbnail.url
                            }
                            id={el.id}
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
