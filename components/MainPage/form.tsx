import { Button, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export const Form = () => {
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    "@media (max-width: 955px)": {
                        flexDirection: "column",
                    },
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Ваше имя"
                    variant="outlined"
                    style={{
                        width: "-webkit-fill-available",
                    }}
                />
                <TextField
                    id="outlined-basic"
                    type="email"
                    label="Ваш email"
                    variant="outlined"
                    style={{
                        width: "-webkit-fill-available",
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Тема"
                    variant="outlined"
                    style={{
                        width: "-webkit-fill-available",
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Ваше сообщение"
                    variant="outlined"
                    multiline={true}
                    rows={5}
                    fullWidth
                />
            </Box>

            <Button variant="contained" sx={{ m: "8px", p: "0" }}>
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
