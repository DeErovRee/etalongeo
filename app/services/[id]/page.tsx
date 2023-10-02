import { apiURL } from "@/utils/URL";
import { Container } from "@mui/material";

async function getData(id: string) {
    const res = await fetch(`${apiURL}/services/${id}`);

    return res.json();
}

type Props = {
    params: {
        id: string;
    };
};

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);
    return (
        <Container
            maxWidth={false}
            sx={{
                height: "100%",
                backgroundColor: "white",
            }}
        >
            <Container>
                <h1 style={{ padding: "25px 0 0" }}>
                    {post.data.attributes.title}
                </h1>
                <p>{post.data.attributes.text}</p>
            </Container>
        </Container>
    );
}
