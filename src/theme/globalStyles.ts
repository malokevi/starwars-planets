import { createGlobalStyle } from "styled-components"
import Stars from "../assets/images/stars-background.jpg"

const globalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        background-color: black;
        overflow-y: scroll;
    }

    body {
        display: flex;
        flex-flow: column nowrap;
        margin: 0;
        flex-grow: 2;
        background: ${({ theme }) => {
            return theme.stars ? `url(${Stars})` : `${theme.colors.gray}`
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

        input, select {
            font-family: "Poppins", arial, serif;
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
