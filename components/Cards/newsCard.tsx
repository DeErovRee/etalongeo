import { Card, Box } from "@mui/material";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { MuiTypoH4 } from "../MuiComponents/MuiTypoH4";
import { MuiTypoBody } from "../MuiComponents/MuiTypoBody";

export const NewsCard = ({
    title,
    description,
    img,
    id,
    endpoint,
}: {
    title: string;
    description: string;
    img: string;
    id: number;
    endpoint: string;
}) => {
    return (
        <Card
            variant="outlined"
            className="card"
            sx={{
                width: "100%",
                minHeight: "200px",
                margin: "10px 5px",
                boxSizing: "border-box",
            }}
        >
            <Link
                href={`/${endpoint}/${id}`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    boxSizing: "border-box",
                    height: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Box
                    className="imageBox"
                    style={{
                        height: "100%",
                        width: "20%",
                        minWidth: "200px",
                        margin: "0 10px 0 0",
                    }}
                >
                    <Image
                        src={img}
                        alt="Sattelite Photo"
                        width={250}
                        height={250}
                        quality={100}
                        style={{
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
                <Box
                    className="textBox"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        boxSizing: "border-box",
                        width: "80%",
                        height: "100%",
                        padding: "15px 15px 15px 0",
                        "& h4": {
                            width: "auto",
                            borderBottom: "0px solid #1976d2",
                        },
                    }}
                >
                    <MuiTypoH4
                        mDesktop="0 0 6px"
                        color="black"
                        alignText="start"
                    >
                        {title}
                    </MuiTypoH4>
                    <hr />
                    <MuiTypoBody>{description}</MuiTypoBody>
                </Box>
            </Link>
        </Card>
    );
};
