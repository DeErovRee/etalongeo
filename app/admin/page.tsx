import EditorForm from "@/components/MainPage/editorForm";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { Box, Container } from "@mui/material";

export default async function Blog() {
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
