import { Button, Typography } from "@mui/material";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Response } from "@/app/docs/page";
import { LocalhostURL as URL } from "@/utils/URL";

export const FileLoader = ({ docs }: { docs: Response }) => {
    const loadAll = () => {
        const zip = new JSZip();

        console.log(docs);

        const remoteZips = docs.map(async (file) => {
            const response = await fetch(URL + file.attributes.url);
            const data = await response.blob();
            zip.file(`${file.attributes.name}`, data);

            return data;
        });

        Promise.all(remoteZips)
            .then(() => {
                zip.generateAsync({ type: "blob" }).then((content) => {
                    saveAs(content, `etalongeo_zip_${Date.now()}.zip`);
                });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <Button
            variant="contained"
            sx={{ m: "8px", p: "0" }}
            type="submit"
            onClick={loadAll}
        >
            <Typography
                variant="button"
                sx={{
                    m: "13px 35px",
                    textTransform: "uppercase",
                    fontFamily: "inherit",
                    fontSize: "14px",
                }}
            >
                Скачать всё
            </Typography>
        </Button>
    );
};
