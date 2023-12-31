import { Questrial } from "next/font/google";
import localFont from "next/font/local";

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const kg_blank = localFont({
  src: '../../../public/fonts/KGBlankSpaceSolid.woff2',
  display: "swap",
});


export const fonts = {
  kg_blank: kg_blank.style.fontFamily,
  questrial: questrial.style.fontFamily,
};
