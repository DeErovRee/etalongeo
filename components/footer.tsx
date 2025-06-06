"use client";

import { Container, Box } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import { MuiTypoBody } from "./MuiComponents/MuiTypoBody";

export const Footer = () => {
    return (
        <footer>
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "#1976d2",
                    width: "100%",
                    p: "67px 0 30px",
                    "@media (max-width: 955px)": {
                        p: "30px 0 20px",
                    },
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        "@media (max-width: 955px)": {
                            flexDirection: "column",
                        },
                    }}
                >
                    <a
                        href="/contacts"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "@media (max-width: 955px)": {
                                    flexDirection: "row",
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    margin: "15px 0 0",
                                },
                            }}
                        >
                            <PlaceOutlinedIcon
                                style={{ color: "white", height: "24px" }}
                            />
                            <MuiTypoBody color="white">
                                Тюмень, ул. Республики, 59, офис 834
                            </MuiTypoBody>
                        </Box>
                    </a>

                    <a
                        href="mailto:kd@etalongeo.ru"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "@media (max-width: 955px)": {
                                    flexDirection: "row",
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    margin: "15px 0 0",
                                },
                            }}
                        >
                            <MailOutlineOutlinedIcon
                                style={{ color: "white", height: "24px" }}
                            />
                            <MuiTypoBody color="white">
                                kd@etalongeo.ru
                            </MuiTypoBody>
                        </Box>
                    </a>

                    <a
                        href="tel:+79088737440"
                        style={{
                            textDecoration: "none",
                            color: "white",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "@media (max-width: 955px)": {
                                    flexDirection: "row",
                                    width: "100%",
                                    justifyContent: "flex-start",
                                    margin: "15px 0 0",
                                },
                            }}
                        >
                            <PhoneCallbackOutlinedIcon
                                style={{ color: "white", height: "24px" }}
                            />
                            <MuiTypoBody color="white">
                                +7 9088 73-74-40
                            </MuiTypoBody>
                        </Box>
                    </a>
                </Container>
            </Container>
        </footer>
    );
};
