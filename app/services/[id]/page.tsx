import { getDataPost } from "@/utils/getDataEntry";
import { Container } from "@mui/material";

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
            <Container>
                <h1 style={{ padding: "25px 0 0" }}>
                    {service.data.attributes.title}
                </h1>
                <p>{service.data.attributes.text}</p>
            </Container>
        </Container>
    );
}
