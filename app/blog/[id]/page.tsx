import { Container } from "@mui/material";
import { getDataPost } from "@/utils/getDataEntry";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params: { id } }: Props) {
    const post = await getDataPost(id, "newses");

    return {
        title: post.data.attributes.title,
    };
}

type Props = {
    params: {
        id: string;
    };
};

export default async function Post({ params: { id } }: Props) {
    const post = await getDataPost(id, "newses");

    return (
        <Container
            maxWidth={false}
            sx={{
                minHeight: "78vh",
                backgroundColor: "white",
            }}
        >
            <Container>
                <h1 style={{ padding: "25px 0 0" }}>
                    {post.data.attributes.title}
                </h1>
                <p style={{ margin: "10px 0 10px" }}>
                    Опубликовано: <i>{post.data.attributes.date}</i>
                </p>
                <ReactMarkdown>{post.data.attributes.text}</ReactMarkdown>
            </Container>
        </Container>
    );
}
