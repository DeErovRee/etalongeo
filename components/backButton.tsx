import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MuiTypoBody } from "./MuiComponents/MuiTypoBody";

export const BackButton = ({
    backTo,
    url,
}: {
    backTo: string;
    url: string;
}) => {
    return (
        <Button
            variant="outlined"
            href={`${url}`}
            sx={{
                "& p": {
                    "@media (max-width: 550px)": {
                        display: "none",
                    },
                },
            }}
        >
            <ArrowBackIcon />
            <MuiTypoBody
                mDesktop="0 0 0 10px"
                mMobile=""
                mTablet=""
                color="inherit"
            >
                {backTo}
            </MuiTypoBody>
        </Button>
    );
};
