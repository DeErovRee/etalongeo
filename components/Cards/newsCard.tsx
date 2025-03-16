import { Card, Box, Typography } from "@mui/material";
import "./style.css";
import Link from "next/link";
import { MuiTypoH3 } from "../MuiComponents/MuiTypoH3";

export const NewsCard = ({
    title,
    content,
    id,
    endpoint,
}: {
    title: string;
    content: string;
    id: number;
    endpoint: string;
}) => {
    return (
        <Card
            variant="outlined"
            className="card"
            sx={{
                width: "370px",
                minWidth: "250px",
                minHeight: "200px",
                margin: "5px",
                boxSizing: "border-box",
                maxHeight: "200px",
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
                    position: "relative",
                }}
            >
                <Box
                    className="textBox"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxSizing: "border-box",
                        position: "absolute",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        padding: "10px",
                    }}
                >
                    <MuiTypoH3 mDesktop="0 0 6px" alignText="center">
                        {title}
                    </MuiTypoH3>
                    <hr />
                    <Typography>{content}</Typography>
                </Box>
            </Link>
        </Card>
    );
};
