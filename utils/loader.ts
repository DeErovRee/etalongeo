"use server";

import { apiURL } from "./urlAPI";

export const myLoader = ({ src }: { src: string }) => {
    return `${apiURL}/user/photo/${src}`;
};
