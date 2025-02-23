import { Typography } from "@mui/material";
import { fontSize } from "@/utils/fontSize";
import { Props } from "./Types";

export const MuiTypoH1: React.FC<Props> = ({
    mDesktop,
    mTablet,
    mMobile,
    children,
    color,
}) => {
    return (
        <Typography
            variant="h1"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.h1}`,
                fontWeight: 800,
                lineHeight: "65px",
                color: `${color}`,
                "@media (max-width: 955px)": {
                    fontSize: `${fontSize.tablet.h1}`,
                    lineHeight: "54px",
                    margin: `${mTablet}`,
                },
                "@media (max-width: 550px)": {
                    fontSize: `${fontSize.mobile.h1}`,
                    lineHeight: "43px",
                    margin: `${mMobile}`,
                },
            }}
        >
            {children}
        </Typography>
    );
};
