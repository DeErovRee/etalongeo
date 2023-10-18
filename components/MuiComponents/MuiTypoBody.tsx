import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { fontSize } from "@/utils/fontSize";

export const MuiTypoBody: React.FC<{
    mDesktop: string;
    mTablet: string;
    mMobile: string;
    children: ReactNode;
    color: string;
}> = ({ mDesktop, mTablet, mMobile, children, color }) => {
    return (
        <Typography
            variant="body1"
            sx={{
                margin: `${mDesktop}`,
                display: { s: "unset" },
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.p}`,
                fontWeight: 500,
                lineHeight: "26px",
                color: `${color}`,
                "@media (max-width: 955px)": {
                    fontSize: `${fontSize.tablet.p}`,
                    margin: `${mTablet}`,
                },
                "@media (max-width: 550px)": {
                    fontSize: `${fontSize.mobile.p}`,
                    margin: `${mMobile}`,
                },
            }}
        >
            {children}
        </Typography>
    );
};
