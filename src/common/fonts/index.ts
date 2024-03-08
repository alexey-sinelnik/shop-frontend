import { Inter, Poppins, Space_Grotesk, Redressed } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });
export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"]
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500"]
});
