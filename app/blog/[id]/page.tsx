import { Container } from "@mui/material";
import { getDataPost } from "@/utils/getDataEntry";
import ReactMarkdown from "react-markdown";
import styles from "@/app/markdown-styles.module.css";
import { BackButton } from "@/components/backButton";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { MuiTypoBody } from "@/components/MuiComponents/MuiTypoBody";

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
            <Container
                sx={{
                    margin: "25px auto",
                }}
            >
                <BackButton backTo="Все новости" url="/blog" />
                <MuiTypoH1 mDesktop="10px 0 0 0">
                    {post.data.attributes.title}
                </MuiTypoH1>
                <MuiTypoBody mDesktop="10px 0 10px">
                    Опубликовано: <i>{post.data.attributes.date}</i>
                </MuiTypoBody>
                <ReactMarkdown className={styles.reactMarkDown}>
                    {post.data.attributes.text}
                </ReactMarkdown>
            </Container>
        </Container>
    );
}
