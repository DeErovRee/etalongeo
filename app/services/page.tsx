import { Service, Services } from "@/components/MainPage/mainSection2";
import { ServiceCard } from "@/components/MainPage/serviceCard";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { LocalhostURL as URL } from "@/utils/URL";
import { getData } from "@/utils/getData";
import { Box, Container, Typography } from "@mui/material";
import { Metadata } from "next";

export interface Newses {
    data: Array<News>;
}

export type News = {
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

export const metadata: Metadata = {
    title: "ЭталонGEO | Услуги",
    description: "Полный список услуг предоставляемых клиентам EtalonGEO",
};

export default async function Services() {
    const services: Services = await getData(
        "services",
        10,
        1,
        "title",
        ":desc"
    );
    return (
        <Container
            sx={{
                minHeight: "78vh",
            }}
        >
            <MuiTypoH1
                mDesktop="45px 0 15px"
                mTablet=""
                mMobile=""
                color="white"
            >
                Услуги
            </MuiTypoH1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {services.data.map((el: Service) => {
                    return (
                        <ServiceCard
                            endpoint="services"
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
