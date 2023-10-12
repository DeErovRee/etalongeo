import { Container, Typography } from "@mui/material";
import Image from "next/image";
import certificate1 from "@/public/certificate1.jpg";
import certificate2 from "@/public/certificate2.jpg";
import certificate3 from "@/public/certificate3.jpg";
import certificate4 from "@/public/certificate4.jpg";

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
                    src={certificate1}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Image
                    alt="Sattelite Photo"
                    src={certificate2}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Image
                    alt="Sattelite Photo"
                    src={certificate3}
                    height={300}
                    quality={100}
                    style={{
                        margin: "5px",
                        border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                />
                <Image
                    alt="Sattelite Photo"
                    src={certificate4}
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
