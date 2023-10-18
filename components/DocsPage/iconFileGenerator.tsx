import { Box } from "@mui/material";
import Image from "next/image";
import doc from "@/public/free-icon-doc-201088.png";
import xls from "@/public/free-icon-xls-201198.png";
import ppt from "@/public/free-icon-ppt-201164.png";
import pdf from "@/public/free-icon-pdf-201153.png";

interface Props {
    ext: string;
    title: string;
    url: string;
}

export const IconFile: React.FC<Props> = ({ ext, title, url }) => {
    let backgroundColor: string | null = null;

    const getImage = (ext: string) => {
        if (ext === ".doc" || ext === ".docx") {
            return <Image src={doc} alt="file-extantion" width={50} />;
        }
        if (ext === ".xls" || ext === ".xlsx") {
            return <Image src={xls} alt="file-extantion" width={50} />;
        }
        if (ext === ".ppt" || ext === ".pptx") {
            return <Image src={ppt} alt="file-extantion" width={50} />;
        }
        if (ext === ".pdf") {
            return <Image src={pdf} alt="file-extantion" width={50} />;
        }
    };

    switch (ext) {
        case ".pdf":
            backgroundColor = "rgb(223,30,36)";
            break;
        case ".xls":
        case ".xlsx":
            backgroundColor = "rgb(15,120,62)";
            break;
        case ".doc":
        case ".docx":
            backgroundColor = "rgb(24,90,189)";
            break;
        case ".ppt":
        case ".pptx":
            backgroundColor = "rgb(191,57,26)";
            break;
    }

    return (
        <a
            data-name={`${title}`}
            data-ext={`${ext}`}
            className="fileDownload"
            href={url}
            target="_blank"
            download
            style={{
                textDecoration: "none",
                color: "inherit",
                margin: "5px",
            }}
        >
            <Box
                sx={{
                    width: "100px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: { backgroundColor },
                    ":hover": {
                        filter: "brightness(0.9)",
                        boxShadow:
                            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                    },
                    borderRadius: "5px",
                    boxShadow:
                        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                    transition:
                        "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, filter 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
            >
                {getImage(ext)}
                <p
                    style={{
                        color: "black",
                        whiteSpace: "break-spaces",
                        textAlign: "center",
                        overflowWrap: "anywhere",
                    }}
                >
                    {title.length > 15 ? title.substring(0, 17) + "..." : title}
                </p>
            </Box>
        </a>
    );
};
