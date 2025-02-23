"use client";

import { LocalhostAPIurl as apiURL, LocalhostURL as URL } from "@/utils/URL";
import { useState } from "react";
import { FileLoader } from "./fileLoader";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import { IconFile } from "./iconFileGenerator";
import { Response } from "@/app/docs/page";

export const DocsForm = () => {
    const [docs, setDocs] = useState<Response | null>(null);
    const [error, setError] = useState<Boolean>(false);

    const getDate = async (e: any) => {
        e.preventDefault();
        setError(false);
        setDocs(null);
        const phone = e.target["phone"].value;
        const order = e.target["order"].value;

        try {
            fetch(`${apiURL}/documents/${order}?populate=documents`)
                .then((res) => {
                    if (!res.ok) {
                        Promise.reject(res);
                        setError(true);
                    }
                    return res.json();
                })
                .then((data) => {
                    if (data && phone === data.data?.attributes.phone) {
                        setDocs(data.data.attributes.documents.data);
                        return;
                    }
                });
        } catch (error) {
            console.log("123123123");
            setError(true);
        }
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "75px",
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
                {error === true && (
                    <p style={{ color: "red" }}>ошибка при получении данных</p>
                )}
            </Box>
            {docs && (
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {docs.map((el) => (
                            <IconFile
                                key={el.id}
                                url={`${URL}${el.attributes.url}`}
                                ext={`${el.attributes.ext}`}
                                title={`${el.attributes.name}`}
                            />
                        ))}
                    </Box>
                    <FileLoader docs={docs} />
                </Container>
            )}
        </Container>
    );
};
