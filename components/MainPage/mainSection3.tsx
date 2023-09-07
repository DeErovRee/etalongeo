import { Container, Typography } from "@mui/material";
import Image from "next/image";

export const MainSection3 = () => {
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
                Сертификаты
            </Typography>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Image
                    alt="Sattelite Photo"
                    src={require("/public/certificate1.jpg")}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Image
                    alt="Sattelite Photo"
                    src={require("/public/certificate2.jpg")}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Image
                    alt="Sattelite Photo"
                    src={require("/public/certificate3.jpg")}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Image
                    alt="Sattelite Photo"
                    src={require("/public/certificate4.jpg")}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
            </Container>
        </Container>
    );
};
