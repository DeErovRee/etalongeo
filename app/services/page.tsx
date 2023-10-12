import { Service, Services } from "@/components/MainPage/mainSection2";
import { ServiceCard } from "@/components/MainPage/serviceCard";
import { LocalhostURL as URL } from "@/utils/URL";
import { getData } from "@/utils/getData";
import { Box, Container, Typography } from "@mui/material";

export interface Newses {
    data: Array<News>;
}

export type News = {
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

export default async function Services() {
    const services: Services = await getData(
        "services",
        10,
        1,
        "title",
        ":desc"
    );
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
                {services.data.map((el: Service) => {
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
            </Box>
        </Container>
    );
}
