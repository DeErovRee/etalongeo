import { Container, Typography } from "@mui/material";
import { ServiceCard } from "./serviceCard";

export const MainSection2 = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                p: "0",
                backgroundColor: "white",
                width: "100%",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        m: "115px 0 10px",
                        display: { xs: "none", md: "flex" },
                        textAlign: "center",
                        fontFamily: "inherit",
                        fontSize: "45px",
                        fontWeight: 700,
                        lineHeight: "40px",
                        color: "black",
                        textDecoration: "none",
                    }}
                >
                    Наши услуги
                </Typography>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        textAlign: "center",
                        fontFamily: "inherit",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        color: "black",
                        textDecoration: "none",
                        mb: "70px",
                    }}
                >
                    Мы предлагаем полный спектр услуг по кадастровым работам
                </Typography>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "row" }}>
                <ServiceCard
                    title="Технические планы"
                    description="Технический план на жилой дом
                        Технический план на объект
                        незавершенного строительства
                        Технический план нежилого
                        помещения, части помещения
                        Технический план сооружения
                        Технический план многоквартирного
                        дома"
                    img={require("../../public/techplan3D.jpg")}
                />
                <ServiceCard
                    title="Межевание"
                    description="При образовании, разделе,
                        объединении или перераспределении
                        земельного участка. Для уточнения
                        границ земельного участка. Для
                        исправления кадастровой ошибки.
                        При выделе земельной доли из общей
                        долевой собственности"
                    img={require("../../public/techplan3D.jpg")}
                />
                <ServiceCard
                    title="Кадастровые работы"
                    description="Изготовление схемы расположения
                        территории на кадастровом плане.
                        Заключение кадастрового инженера.
                        Изготовление кадастрового паспорта
                        на объект недвижимости.
                        Предоставление кадастровой выписки
                        об объекте"
                    img={require("../../public/techplan3D.jpg")}
                />
                <ServiceCard
                    title="Вынос границ"
                    description="Для установления границ земельного
                        участка в натуру. Для выноса пятна
                        застройки на участок под новое
                        строительство"
                    img={require("../../public/techplan3D.jpg")}
                />
            </Container>
        </Container>
    );
};
