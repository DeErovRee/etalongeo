import { BackButton } from "@/components/backButton";
import { getDataPost } from "@/utils/getDataEntry";
import { Container, Button } from "@mui/material";

type Props = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params: { id } }: Props) {
    const service = await getDataPost(id, "services");

    return {
        title: `EtalonGEO | ${service.data.attributes.title}`,
    };
}

export default async function Service({ params: { id } }: Props) {
    const service = await getDataPost(id, "services");

    return (
        <Container
            maxWidth={false}
            sx={{
                height: "77vh",
                backgroundColor: "white",
            }}
        >
            <Container
                sx={{
                    margin: "25px auto",
                }}
            >
                <BackButton backTo="все услуги" url="/services" />
                <h1 style={{ padding: "10px 0 0" }}>
                    {service.data.attributes.title}
                </h1>
                <p style={{ marginBottom: "10px" }}>
                    {service.data.attributes.text}
                </p>
                <Button variant="contained" href="/#form">
                    Заказать услугу
                </Button>
            </Container>
        </Container>
    );
}
