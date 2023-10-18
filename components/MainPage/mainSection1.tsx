import { Button, Container, Typography } from "@mui/material";
import { MuiTypoH1 } from "../MuiComponents/MuiTypoH1";

export const MainSection1 = () => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: "220px",
                "@media (max-width: 955px)": {
                    mb: "90px",
                },
            }}
        >
            <MuiTypoH1
                mDesktop="210px 0 55px"
                mTablet="135px 0 43px"
                mMobile="90px 0 30px"
                color="white"
            >
                Ваш надежный помощник в земельно-имущественных вопросах
            </MuiTypoH1>
            <Button variant="contained">
                <Typography
                    variant="button"
                    sx={{
                        m: "13px 35px",
                        textTransform: "uppercase",
                        fontFamily: "inherit",
                        fontSize: "14px",
                        "@media (min-width:0px)": {
                            display: "unset",
                        },
                    }}
                >
                    <a
                        href="#form"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Заказать консультацию
                    </a>
                </Typography>
            </Button>
        </Container>
    );
};
