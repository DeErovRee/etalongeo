"use client";

import { Container, Typography, Box, Button, TextField } from "@mui/material";

export default function Docs() {
    const getDate = async (e: any) => {
        e.preventDefault();
        console.log(e.target["phone"].value);
        console.log(e.target["order"].value);
    };

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
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": {
                            m: 1,
                            width: "100%",
                            boxSizing: "border-box",
                        },
                        backgroundColor: "white",
                        width: "100%",
                        mt: "75px",
                        mb: "30px",
                        p: "10px",
                        borderRadius: "5px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={(e) => getDate(e)}
                >
                    <TextField
                        id="phone"
                        label="Ваш номер телефона"
                        variant="outlined"
                    />
                    <TextField
                        id="order"
                        label="Ваш номер заказа"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        sx={{ m: "8px", p: "0" }}
                        type="submit"
                    >
                        <Typography
                            variant="button"
                            sx={{
                                m: "13px 35px",
                                textTransform: "uppercase",
                                fontFamily: "inherit",
                                fontSize: "14px",
                            }}
                        >
                            Получить
                        </Typography>
                    </Button>
                </Box>
            </Container>
        </Container>
    );
}
