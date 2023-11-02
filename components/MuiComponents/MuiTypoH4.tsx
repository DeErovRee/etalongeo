import { Typography } from "@mui/material";
import { fontSize } from "@/utils/fontSize";
import { Props } from "./Types";

export const MuiTypoH4: React.FC<Props> = ({
    mDesktop,
    mTablet,
    mMobile,
    children,
    color,
    alignText,
}) => {
    return (
        <Typography
            variant="h4"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: `${alignText || "center"}`,
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.h4}`,
                fontWeight: 500,
                lineHeight: "26px",
                color: `${color}`,
                "@media (max-width: 955px)": {
                    fontSize: `${fontSize.tablet.h4}`,
                    margin: `${mTablet}`,
                },
                "@media (max-width: 550px)": {
                    fontSize: `${fontSize.mobile.h4}`,
                    margin: `${mMobile}`,
                },
            }}
        >
            {children}
        </Typography>
    );
};
