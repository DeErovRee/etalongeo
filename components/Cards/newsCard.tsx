import { Card, Box } from "@mui/material";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { MuiTypoH4 } from "../MuiComponents/MuiTypoH4";
import { MuiTypoH5 } from "../MuiComponents/MuiTypoH5";
import { MuiTypoH3 } from "../MuiComponents/MuiTypoH3";

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
                width: "400px",
                minWidth: "200px",
                minHeight: "200px",
                margin: "5px",
                boxSizing: "border-box",
                // backgroundImage: `url('${img}')`,
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
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
                    className="imageBox"
                    style={{
                        height: "100%",
                        width: "100%",
                        minWidth: "200px",
                        margin: "0 0 -4px 0",
                        // filter: "blur(5px)",
                    }}
                >
                    <Box
                        sx={{
                            filter: "brightness(0.8)",
                        }}
                    >
                        <Image
                            src={img}
                            alt="Sattelite Photo"
                            width={400}
                            height={200}
                            quality={100}
                            style={{
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Box>
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
                        "& p": {
                            color: "white",
                        },
                        "& h4": {
                            color: "white",
                        },
                    }}
                >
                    <MuiTypoH3
                        mDesktop="0 0 6px"
                        color="white"
                        alignText="center"
                    >
                        {title}
                    </MuiTypoH3>
                    <hr />
                    {/* <MuiTypoH5 color="white">{description}</MuiTypoH5> */}
                </Box>
            </Link>
        </Card>
    );
};
