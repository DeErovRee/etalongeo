"use client";

import { IconFile } from "@/components/DocsPage/iconFileGenerator";
import { LocalhostAPIurl as apiURL, LocalhostURL as URL } from "@/utils/URL";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

type Data = {
    attributes: {
        url: string;
        ext: string;
        name: string;
        hash: string;
    };
};

type Response = Data[];

export default function Docs() {
    const [docs, setDocs] = useState<Response | null>(null);

    const getDate = async (e: any) => {
        e.preventDefault();
        setDocs(null);
        const phone = e.target["phone"].value;
        const order = e.target["order"].value;

        fetch(`${apiURL}/documents/${order}?populate=documents`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (phone === data.data.attributes.phone) {
                    setDocs(data.data.attributes.documents.data);
                    return;
                }
                console.log("Введены неверные данные");
            });
    };

    console.log(docs);

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
                </Box>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {docs &&
                        docs.map((el) => (
                            <IconFile
                                key={el.attributes.hash}
                                url={`${URL}${el.attributes.url}`}
                                ext={`${el.attributes.ext}`}
                                title={`${el.attributes.name}`}
                            />
                        ))}
                </Container>
            </Container>
        </Container>
    );
}
