import { Container } from "@mui/material";
import { Form } from "./form";
import { MuiTypoH2 } from "../MuiComponents/MuiTypoH2";
import { MuiTypoH4 } from "../MuiComponents/MuiTypoH4";

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
            <MuiTypoH2
                mDesktop="115px 0 0"
                mMobile="90px 0 0"
                mTablet="85px 0 0"
                color="white"
            >
                Контактная информация
            </MuiTypoH2>
            <MuiTypoH4 mDesktop="10px 0 0" color="white">
                Заполняя формы обратной связи на сайте etalongeo.ru, Вы даете
                свое согласие на обработку персональных данных в соответствии с
                ФЗ №152 - ФЗ "О персональных данных".
            </MuiTypoH4>
            <Form buttonText="Отправить" />
        </Container>
    );
};
