"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Box, Container } from "@mui/material";

import EditorForm from "@/components/MainPage/editorForm";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";

export default function Admin() {
    return (
        <Container>
            <MuiTypoH1 mDesktop="45px 0 15px" color="white">
                Панель редактора
            </MuiTypoH1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                <EditorForm />
            </Box>
        </Container>
    );
}
