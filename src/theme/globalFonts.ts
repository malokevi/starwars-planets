import { createGlobalStyle } from "styled-components"
import distantGalaxy from "../assets/fonts/DistantGalaxy.ttf"
import libreFranklin from "../assets/fonts/LibreFranklin.ttf"
import PoppinsRegular from "../assets/fonts/poppins/Poppins-Regular.ttf"
import PoppinsBold from "../assets/fonts/poppins/Poppins-Bold.ttf"
import PoppinsExtraBold from "../assets/fonts/poppins/Poppins-ExtraBold.ttf"

const globalFonts = createGlobalStyle`
    @font-face {
        font-family: "DistantGalaxy";
        font-weight: 400;
        src: url(${distantGalaxy}) format("truetype");
    }

    @font-face {
        font-family: "LibreFranklin";
        font-weight: 400;
        src: url(${libreFranklin}) format("truetype");
    }

    @font-face {
        font-family: "Poppins";
        font-weight: 400;
        src: url(${PoppinsRegular}) format("truetype");
    }
    
    @font-face {
        font-family: "Poppins";
        font-weight: 700;
        src: url(${PoppinsBold}) format("truetype");
    }
    
    @font-face {
        font-family: "Poppins";
        font-weight: 900;
        src: url(${PoppinsExtraBold}) format("truetype");
    }
`

export default globalFonts
