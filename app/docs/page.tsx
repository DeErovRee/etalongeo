"use client";

import { LocalhostAPIurl as apiURL, LocalhostURL as URL } from "@/utils/URL";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

type Data = {
    attributes: {
        url: string;
    };
};

type Response = {
    data: {
        attributes: {
            documents: {
                data: Data[];
            };
        };
    };
};

export default function Docs() {
    const [docs, setDocs] = useState<Response>();
    const getDate = async (e: any) => {
        e.preventDefault();
        const phone = e.target["phone"].value;
        const order = e.target["order"].value;

        fetch(`${apiURL}/documents/${order}?populate=documents`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDocs(data);
                console.log(data);
            });
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
                    {/* <TextField
                        id="phone"
                        label="Ваш номер телефона"
                        variant="outlined"
                    /> */}
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

                {docs && (
                    <a
                        href={`${URL}${docs.data.attributes.documents.data[0].attributes.url}`}
                        target="_blank"
                        download="etalongeo"
                    >
                        Скачать файл!
                    </a>
                )}
            </Container>
        </Container>
    );
}
