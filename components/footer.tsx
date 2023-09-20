"use client";

import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PhoneCallbackOutlinedIcon from "@material-ui/icons/PhoneCallbackOutlined";

export const Footer = () => {
    return (
        <footer>
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "#1976d2",
                    width: "100%",
                    p: "67px 0 30px",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <PlaceOutlinedIcon
                            style={{ color: "white", height: "24px" }}
                        />
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                textAlign: "center",
                                fontFamily: "inherit",
                                fontSize: "16px",
                                fontWeight: 300,
                                lineHeight: "20px",
                                color: "white",
                                textDecoration: "none",
                                m: "10px 0 0",
                            }}
                        >
                            Тюмень, ул. Республики, 59, офис 834
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <MailOutlineOutlinedIcon
                            style={{ color: "white", height: "24px" }}
                        />
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                textAlign: "center",
                                fontFamily: "inherit",
                                fontSize: "16px",
                                fontWeight: 300,
                                lineHeight: "20px",
                                m: "10px 0 0",
                            }}
                        >
                            <a
                                href="mailto:kd@etalongeo.ru"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                kd@etalongeo.ru
                            </a>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <PhoneCallbackOutlinedIcon
                            style={{ color: "white", height: "24px" }}
                        />
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                textAlign: "center",
                                fontFamily: "inherit",
                                fontSize: "16px",
                                fontWeight: 300,
                                lineHeight: "20px",
                                color: "white",
                                textDecoration: "none",
                                m: "10px 0 0",
                            }}
                        >
                            +7 9088 73-74-40
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </footer>
    );
};
