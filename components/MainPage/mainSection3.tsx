import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import certificate1 from "@/public/certificate1.jpg";
import certificate2 from "@/public/certificate2.jpg";
import certificate3 from "@/public/certificate3.jpg";
import certificate4 from "@/public/certificate4.jpg";
import { MuiTypoH1 } from "../MuiComponents/MuiTypoH1";

export const MainSection3 = () => {
    const itemData = [certificate1, certificate2, certificate3, certificate4];
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
            <MuiTypoH1
                mDesktop="45px 0 20px"
                mTablet="40px 0 25px"
                mMobile="35px 0 15px"
                color="bleck"
            >
                Сертификаты
            </MuiTypoH1>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                {itemData.map((item) => {
                    return (
                        <Box
                            sx={{
                                m: "5px",
                            }}
                        >
                            <Image
                                src={item}
                                alt="certificate"
                                style={{
                                    width: "auto",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    );
                })}
            </Container>
        </Container>
    );
};
