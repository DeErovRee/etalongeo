"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Container, TextField, Button, Box } from "@mui/material";

interface LoginFormInputs {
    username: string;
    password: string;
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();
    const router = useRouter();

    const onSubmit = async (data: LoginFormInputs) => {
        try {
            const response = await fetch(
                "http://195.133.73.116:3000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                const { token } = await response.json();
                document.cookie = `token=${token}; path=/; max-age=14400`; // Сохраняем токен в куки на 1 час
                router.push("/admin"); // Перенаправляем на страницу администратора
            } else {
                const errorData = await response.json();
                console.error("Login failed", errorData);
            }
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 3 }}
            >
                <TextField
                    label="username"
                    {...register("username", {
                        required: "Username is required",
                    })}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="password"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
}
