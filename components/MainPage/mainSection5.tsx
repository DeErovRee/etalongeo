import { Container, Typography } from "@mui/material";
import { Form } from "./form";

export const MainSection5 = () => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            id="form"
        >
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    display: { xs: "none", md: "flex" },
                    textAlign: "center",
                    fontFamily: "inherit",
                    fontSize: "45px",
                    fontWeight: 700,
                    lineHeight: "40px",
                    color: "white",
                    textDecoration: "none",
                    m: "115px 0 0",
                }}
            >
                Контактная информация
            </Typography>
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    display: { xs: "none", md: "flex" },
                    textAlign: "center",
                    fontFamily: "inherit",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    color: "white",
                    textDecoration: "none",
                    m: "10px 0 0",
                }}
            >
                Заполняя формы обратной связи на сайте etalongeo.ru, Вы даете
                свое согласие на обработку персональных данных в соответствии с
                ФЗ №152 - ФЗ "О персональных данных".
            </Typography>
            <Form />
        </Container>
    );
};
