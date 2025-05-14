"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
    Input,
} from "@mui/material";

import { createService } from "@/api/services/createService";
import { createPost } from "@/api/posts/createPost";

interface EditorFormProps {
    createPost: (content: string, coverImage: File | null) => void;
    createService: (
        content: string,
        coverImage: File | null,
        price: string
    ) => void;
}

const EditorForm: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [coverImage, setCoverImage] = useState<File | null>(null);

    const handleCoverImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.target.files && event.target.files[0]) {
            setCoverImage(event.target.files[0]);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedType === "post") {
            createPost({ title, content }); // Добавить coverImage после обновления бд
        } else if (selectedType === "service") {
            createService({ title, content, price: Number(price) }); // Добавить coverImage после обновления бд
        }
    };

    const buttonStyles = {
        m: 1,
        width: "-webkit-fill-available",
        backgroundColor: "primary.main",
        color: "white",
        "&:hover": {
            backgroundColor: "primary.dark",
        },
    };

    return (
        <Box
            component="form"
            id="form"
            sx={{
                "& .MuiTextField-root": {
                    m: 1,
                    width: "100%",
                    boxSizing: "border-box",
                },
                width: "100%",
                backgroundColor: "white",
                mt: "25px",
                mb: "30px",
                p: "10px",
                borderRadius: "5px",
            }}
            noValidate={false}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <FormControl
                sx={{ m: 1, width: "-webkit-fill-available" }}
                required
            >
                <InputLabel id="type-select-label">Выберите тип</InputLabel>
                <Select
                    labelId="type-select-label"
                    id="type-select"
                    value={selectedType}
                    onChange={(event) =>
                        setSelectedType(event.target.value as string)
                    }
                    label="Выберите тип"
                >
                    <MenuItem value="post">Пост</MenuItem>
                    <MenuItem value="service">Услуга</MenuItem>
                </Select>
            </FormControl>
            <TextField
                required
                label="Заголовок"
                multiline
                rows={1}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                sx={{ m: 1, width: "-webkit-fill-available !important" }}
            />
            <TextField
                required
                label="Описание"
                multiline
                rows={8}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                sx={{ m: 1, width: "-webkit-fill-available !important" }}
            />
            <Input
                type="file"
                onChange={handleCoverImageChange}
                sx={{ display: "none" }}
                id="cover-image-upload"
            />
            {selectedType === "service" && (
                <TextField
                    required
                    label="Цена"
                    type="number"
                    value={price}
                    onChange={(event) => {
                        if (/^\d*\.?\d{0,2}$/.test(event.target.value)) {
                            setPrice(event.target.value);
                        }
                    }}
                    sx={{ m: 1, width: "100%" }}
                />
            )}
            <label htmlFor="cover-image-upload">
                <Button variant="contained" component="span" sx={buttonStyles}>
                    Загрузить обложку
                </Button>
            </label>
            <Button type="submit" variant="contained" sx={buttonStyles}>
                <Typography
                    variant="button"
                    sx={{
                        display: { s: "unset" },
                        m: "13px 35px",
                        textTransform: "uppercase",
                        fontFamily: "inherit",
                        fontSize: "14px",
                    }}
                >
                    Отправить
                </Typography>
            </Button>
        </Box>
    );
};

export default EditorForm;
