"use client";

import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import PlaceOutlinedIcon from "@material-ui/icons/PlaceOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PhoneCallbackOutlinedIcon from "@material-ui/icons/PhoneCallbackOutlined";
import { MuiTypoH5 } from "./MuiComponents/MuiTypoH5";

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
                        <MuiTypoH5
                            mDesktop="0 0 0 10px"
                            mTablet=""
                            mMobile=""
                            color="white"
                        >
                            <a
                                href="/contacts"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                Тюмень, ул. Республики, 59, офис 834
                            </a>
                        </MuiTypoH5>
                    </Box>
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
                        <MuiTypoH5
                            mDesktop="0 0 0 10px"
                            mTablet=""
                            mMobile=""
                            color="white"
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
                        </MuiTypoH5>
                    </Box>
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
                        <MuiTypoH5
                            mDesktop="0 0 0 10px"
                            mTablet=""
                            mMobile=""
                            color="white"
                        >
                            +7 9088 73-74-40
                        </MuiTypoH5>
                    </Box>
                </Container>
            </Container>
        </footer>
    );
};
