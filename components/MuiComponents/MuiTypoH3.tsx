import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { fontSize } from "@/utils/fontSize";

export const MuiTypoH3: React.FC<{
    mDesktop: string;
    mTablet: string;
    mMobile: string;
    children: ReactNode;
    color: string;
}> = ({ mDesktop, mTablet, mMobile, children, color }) => {
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
