import { Container, Button } from "@mui/material";
import { ServiceCard } from "../Cards/serviceCard";
import Link from "next/link";
import { MuiTypoH2 } from "../MuiComponents/MuiTypoH2";
import { MuiTypoH3 } from "../MuiComponents/MuiTypoH3";
import { getServices } from "@/api/services/getServices";

export const ServiceMainSection = async () => {
    const services = await getServices({});

    return (
        services && (
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
                    {services?.map(({ id, name, description }) => {
                        return (
                            <ServiceCard
                                key={id}
                                endpoint="blog"
                                id={id}
                                name={name}
                                description={description}
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
        )
    );
};
