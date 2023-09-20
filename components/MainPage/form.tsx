import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Form = () => {
    return (
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
            }}
            noValidate
            autoComplete="off"
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Ваше имя"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    type="email"
                    label="Ваш email"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Тема"
                    variant="outlined"
                />
            </div>
            <div
                style={{
                    display: "flex",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Ваше сообщение"
                    variant="outlined"
                    multiline={true}
                    rows={5}
                />
            </div>
            <Button variant="contained" sx={{ m: "8px", p: "0" }}>
                <Typography
                    variant="button"
                    sx={{
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
