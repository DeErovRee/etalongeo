import { Typography } from "@mui/material";
import { fontSize } from "@/utils/fontSize";
import { Props } from "./Types";

export const MuiTypoH2: React.FC<Props> = ({
    mDesktop,
    mTablet,
    mMobile,
    children,
    color,
}) => {
    return (
        <Typography
            variant="h2"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.h2}`,
                fontWeight: 700,
                lineHeight: "40px",
                color: `${color}`,
                "@media (max-width: 955px)": {
                    fontSize: `${fontSize.tablet.h2}`,
                    margin: `${mTablet}`,
                },
                "@media (max-width: 550px)": {
                    fontSize: `${fontSize.mobile.h2}`,
                    margin: `${mMobile}`,
                },
            }}
        >
            {children}
        </Typography>
    );
};
