import { Container, Button } from "@mui/material";
import Link from "next/link";
import { MuiTypoH2 } from "../MuiComponents/MuiTypoH2";
import { NewsCard } from "../Cards/newsCard";
import { getPosts } from "@/query/posts/getPosts";

export async function PostMainSection() {
    const posts = await getPosts({});

    return (
        posts && (
            <Container
                maxWidth={false}
                sx={{
                    p: "0",
                    backgroundColor: "white",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <MuiTypoH2
                    mDesktop="45px 0 20px"
                    mTablet="40px 0 17px"
                    mMobile="35px 0 15px"
                    color="black"
                >
                    Последние новости
                </MuiTypoH2>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        "@media (max-width: 955px)": {
                            flexWrap: "wrap",
                        },
                    }}
                >
                    {posts?.map(({ id, title, content }) => {
                        return (
                            <NewsCard
                                endpoint="blog"
                                key={id}
                                id={id}
                                title={title}
                                content={content}
                            />
                        );
                    })}
                </Container>
                <Button
                    variant="contained"
                    sx={{
                        mb: "117px",
                    }}
                >
                    <Link
                        href={"./blog"}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        Все новости
                    </Link>
                </Button>
            </Container>
        )
    );
}
