import { Typography } from "@mui/material";
import { fontSize } from "@/utils/fontSize";
import { Props } from "./Types";

export const MuiTypoH5: React.FC<Props> = ({
    mDesktop,
    mTablet,
    mMobile,
    children,
    color,
}) => {
    return (
        <Typography
            variant="h5"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.h5}`,
                fontWeight: 500,
                lineHeight: "20px",
                color: `${color}`,
                "@media (max-width: 955px)": {
                    fontSize: `${fontSize.tablet.h5}`,
                    margin: `${mTablet}`,
                },
                "@media (max-width: 550px)": {
                    fontSize: `${fontSize.mobile.h5}`,
                    margin: `${mMobile}`,
                },
            }}
        >
            {children}
        </Typography>
    );
};
