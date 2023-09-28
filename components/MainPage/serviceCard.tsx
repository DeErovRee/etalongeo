"use server";

import { Card } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";
import "./style.css";
import { myLoader } from "../../utils/loader";
import Link from "next/link";

export const ServiceCard = ({
    title,
    description,
    img,
    id,
}: {
    title: string;
    description: string;
    img: string;
    id: number;
}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: "300px",
                width: "100%",
                padding: "15px",
                margin: "10px 5px",
                boxSizing: "border-box",
            }}
        >
            <Link
                href={`/blog/${id}`}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Image
                    src={img}
                    className="image"
                    alt="Sattelite Photo"
                    width={100}
                    height={100}
                    quality={100}
                    style={{
                        objectFit: "cover",
                        borderRadius: "50%",
                        margin: "0 0 20px",
                    }}
                />
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        textAlign: "center",
                        fontFamily: "inherit",
                        fontSize: "17px",
                        fontWeight: 700,
                        lineHeight: "25.5px",
                        color: "black",
                        textDecoration: "none",
                        mb: "6.5px",
                    }}
                >
                    {title}
                </Typography>
                <hr
                    style={{
                        width: "50%",
                        border: "1px solid #1976d2",
                    }}
                />
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: { xs: "none", md: "flex" },
                        textAlign: "center",
                        fontFamily: "inherit",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "21px",
                        color: "black",
                        textDecoration: "none",
                        mt: "20px",
                        lineClamp: "3",
                    }}
                >
                    {description.substring(0, 200) + `...`}
                </Typography>
            </Link>
        </Card>
    );
};
