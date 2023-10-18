import { Container, Typography, Box } from "@mui/material";
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
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        mt: "60px",
                        mb: "7px",
                        display: { xs: "none", md: "flex" },
                        color: "#1976d2",
                        fontSize: "20px",
                        lineHeight: "22px",
                        fontWeight: "bold",
                    }}
                >
                    Контакты
                </Typography>
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
                    <p>
                        <b>Режим работы: </b>пн.- пт. c 10 — 00 до 19 — 00
                    </p>
                    <p>
                        <b>Адрес: </b>625003 г. Тюмень, ул. Республики 59, офис
                        834
                    </p>
                    <p>
                        <b>Телефон: </b>8(9088) 73 74 40
                    </p>
                    <p>
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
                    </p>
                </Box>
                <Box
                    sx={{
                        mb: "170px",
                    }}
                >
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Acdce439a500152832d7e4831bf4e1143195d855c2ddefe42c7ea848866420638&amp;source=constructor"
                        width="825"
                        height="350"
                        frameBorder="0"
                    ></iframe>
                </Box>
            </Container>
        </Container>
    );
}
