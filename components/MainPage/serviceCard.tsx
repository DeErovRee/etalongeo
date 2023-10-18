import { Card } from "@mui/material";
import Image from "next/image";
import { Typography } from "@mui/material";
import "./style.css";
import Link from "next/link";
import { MuiTypoH4 } from "../MuiComponents/MuiTypoH4";
import { MuiTypoBody } from "../MuiComponents/MuiTypoBody";

export const ServiceCard = ({
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
    const regexp = /^\!\[[A-Za-z0-9\W_]*\]\([A-Za-z0-9\W_]*\)$/gim;

    return (
        <Card
            variant="outlined"
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
                <MuiTypoH4
                    mDesktop="0 0 6px"
                    mTablet="0 0 6px"
                    mMobile="0 0 6px"
                    color="black"
                >
                    {title}
                </MuiTypoH4>
                <hr
                    style={{
                        width: "50%",
                        border: "1px solid #1976d2",
                    }}
                />
                <MuiTypoBody
                    mDesktop="20px 0 0"
                    mTablet="20px 0 0"
                    mMobile="20px 0 0"
                    color="black"
                    // variant="h6"
                    // component="h6"
                    // sx={{
                    //     overflow: "hidden",
                    //     textOverflow: "ellipsis",
                    //     display: { s: "unset", md: "flex" },
                    //     textAlign: "center",
                    //     fontFamily: "inherit",
                    //     fontSize: "14px",
                    //     fontWeight: 500,
                    //     lineHeight: "21px",
                    //     color: "black",
                    //     textDecoration: "none",
                    //     mt: "20px",
                    // }}
                >
                    {description.replace(regexp, "").length > 380
                        ? description.replace(regexp, "").substring(0, 380) +
                          "..."
                        : description.replace(regexp, "")}
                </MuiTypoBody>
            </Link>
        </Card>
    );
};
