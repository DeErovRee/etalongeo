import { ReactNode } from "react";

export interface Props {
    mDesktop?: string;
    mTablet?: string;
    mMobile?: string;
    children: ReactNode;
    color?: string;
}
