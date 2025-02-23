import { Typography } from "@mui/material";
import { fontSize } from "@/utils/fontSize";
import { Props } from "./Types";

export const MuiTypoH3: React.FC<Props> = ({
    mDesktop,
    mTablet,
    mMobile,
    children,
    color,
}) => {
    return (
        <Typography
            variant="h3"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.h3}`,
                fontWeight: 600,
                lineHeight: "26px",
                color: `${color}`,
                "@media (max-width: 955px)": {
                    fontSize: `${fontSize.tablet.h3}`,
                    margin: `${mTablet}`,
                },
                "@media (max-width: 550px)": {
                    fontSize: `${fontSize.mobile.h3}`,
                    margin: `${mMobile}`,
                },
            }}
        >
            {children}
        </Typography>
    );
};
