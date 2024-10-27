import {  M_PLUS_2, Noto_Sans_JP } from "next/font/google";

export const MPlus2 = M_PLUS_2({
    subsets: ["latin"],
    display: "swap",
    variable: '--font-m-plus',
});

export const NotoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: '--font-noto-sans-jp',
});
