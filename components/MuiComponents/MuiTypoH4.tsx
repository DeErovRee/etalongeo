import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { fontSize } from "@/utils/fontSize";

export const MuiTypoH4: React.FC<{
    mDesktop: string;
    mTablet: string;
    mMobile: string;
    children: ReactNode;
    color: string;
}> = ({ mDesktop, mTablet, mMobile, children, color }) => {
    return (
        <Typography
            variant="h4"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: "center",
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
