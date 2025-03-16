import { Card } from "@mui/material";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { MuiTypoH4 } from "../MuiComponents/MuiTypoH4";
import ReactMarkdown from "react-markdown";

export const ServiceCard = ({
    name,
    description,
    id,
    endpoint,
}: {
    name: string;
    description: string;
    id: number;
    endpoint: string;
}) => {
    const regexp = /^\!\[[A-Za-z0-9\W_]*\]\([A-Za-z0-9\W_]*\)$/gim;

    return (
        <Card
            variant="outlined"
            className="card"
            sx={{
                maxWidth: "300px",
                width: "278px",
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
                    padding: "15px",
                    boxSizing: "border-box",
                    height: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <MuiTypoH4 mDesktop="0 0 6px" color="black">
                    {name}
                </MuiTypoH4>
                <hr
                    style={{
                        width: "50%",
                        border: "1px solid #1976d2",
                        marginBottom: "5px",
                    }}
                />
                <ReactMarkdown>
                    {description.replace(regexp, "").length > 380
                        ? description.replace(regexp, "").substring(0, 380) +
                          "..."
                        : description.replace(regexp, "")}
                </ReactMarkdown>
            </Link>
        </Card>
    );
};
