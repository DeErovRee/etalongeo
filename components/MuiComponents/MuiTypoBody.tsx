import { Typography } from "@mui/material";
import { fontSize } from "@/utils/fontSize";
import { Props } from "./Types";

export const MuiTypoBody: React.FC<Props> = ({
    mDesktop,
    mTablet,
    mMobile,
    children,
    color,
}) => {
    return (
        <Typography
            variant="body1"
            sx={{
                margin: `${mDesktop}`,
                fontFamily: "inherit",
                fontSize: `${fontSize.desktop.p}`,
                fontWeight: 500,
                lineHeight: "20px",
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
