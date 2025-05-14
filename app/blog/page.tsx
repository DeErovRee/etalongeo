import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { NewsCard } from "@/components/Cards/newsCard";
import { getPosts } from "@/api/posts/getPosts";

export const metadata: Metadata = {
    title: "ЭталонGEO | Блог",
    description: "Полезные стать и новости",
};

export default async function Blog() {
    const posts = await getPosts({});

    return (
        <Container>
            <MuiTypoH1 mDesktop="45px 0 15px" color="white">
                Новости
            </MuiTypoH1>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {posts &&
                    posts.map(({ id, title, content }) => {
                        return (
                            <NewsCard
                                key={id}
                                endpoint="blog"
                                id={id}
                                title={title}
                                content={content}
                            />
                        );
                    })}
            </Box>
        </Container>
    );
}
