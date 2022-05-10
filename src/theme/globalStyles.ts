import { createGlobalStyle } from "styled-components"
import Stars from "../assets/images/stars-background.jpg"
import distantGalaxy from "../assets/fonts/DistantGalaxy.ttf"
import libreFranklin from "../assets/fonts/LibreFranklin.ttf"
import PoppinsRegular from "../assets/fonts/poppins/Poppins-Regular.ttf"
import PoppinsBold from "../assets/fonts/poppins/Poppins-Bold.ttf"
import PoppinsExtraBold from "../assets/fonts/poppins/Poppins-ExtraBold.ttf"

const globalStyles = createGlobalStyle`
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

    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        background-color: black;
    }

    body {
        display: flex;
        flex-flow: column nowrap;
        margin: 0;
        flex-grow: 2;
        background: ${({ theme }) => {
            return theme.stars ? `url(${Stars})` : "black"
        }};
        transition: background-position 13s ease-out;
        background-position: 0 ${({ theme }) => (theme.planetPan ? 0 : "20%")};
        font-family: "Poppins", arial, serif;

        #root {
            display: flex;
            flex-flow: column nowrap;
            flex-grow: 2;
        }

        h1, h2, h3, h4, h5 {
            font-family: "DistantGalaxy", arial, serif;
            letter-spacing: 3px;
        }

        h1 {
            font-size: ${({ theme }) => theme.fontSize.xl};
        }

        h2 {
            font-size: ${({ theme }) => theme.fontSize.lg};
        }

        .shadow {
            box-shadow: 0 8px 12px ${({ theme }) => theme.colors.boxShadow};
        }

        button {
            cursor: pointer;

            &.button-reset {
                background-color: transparent;
                border: none;
            }
        }
    }
`

export default globalStyles
