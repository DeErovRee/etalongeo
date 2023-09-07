import { Button, Container, Typography } from "@mui/material";

export const MainSection1 = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          mt: "210px",
          mb: "55px",
          display: { xs: "none", md: "flex" },
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "55px",
          fontWeight: 700,
          lineHeight: "65px",
          color: "white",
          textDecoration: "none",
        }}
      >
        Ваш надежный помощник в земельно-имущественных вопросах
      </Typography>
      <Button variant="contained" sx={{ p: "0px", mb: "220px" }}>
        <Typography
          variant="button"
          sx={{
            m: "13px 35px",
            textTransform: "uppercase",
            fontFamily: "inherit",
            fontSize: "14px",
          }}
        >
          Заказать консультацию
        </Typography>
      </Button>
    </Container>
  );
};
