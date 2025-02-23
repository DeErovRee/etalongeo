import { MuiTypoBody } from "@/components/MuiComponents/MuiTypoBody";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { Container, Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ЭталонGEO | Контакты",
    description: "Контакты для связи с нами",
};

export default function Contacts() {
    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundColor: "white",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <MuiTypoH1 mDesktop="60px 0 7px 0" color="black">
                    Контакты
                </MuiTypoH1>
                <hr
                    style={{
                        height: "2px",
                        width: "80px",
                        backgroundColor: "red",
                        border: "none",
                        margin: "0 0 17px",
                    }}
                />
                <Box
                    sx={{
                        mb: "70px",
                    }}
                >
                    <MuiTypoBody color="black">
                        <b>Режим работы: </b>пн.- пт. c 10 — 00 до 19 — 00
                    </MuiTypoBody>
                    <MuiTypoBody color="black">
                        <b>Адрес: </b>625003 г. Тюмень, ул. Республики 59, офис
                        834
                    </MuiTypoBody>
                    <MuiTypoBody color="black">
                        <b>Телефон: </b>8(9088) 73 74 40
                    </MuiTypoBody>
                    <MuiTypoBody color="black">
                        <b>Почта: </b>
                        <a
                            href="mailto:kd@etalongeo.ru"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            kd@etalongeo.ru
                        </a>
                    </MuiTypoBody>
                </Box>
                <Box
                    sx={{
                        mb: "170px",
                        width: "100%",
                    }}
                >
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acdce439a500152832d7e4831bf4e1143195d855c2ddefe42c7ea848866420638&amp;source=constructor"
                        width="100%"
                        height="350"
                        frameBorder="0"
                    ></iframe>
                </Box>
            </Container>
        </Container>
    );
}
