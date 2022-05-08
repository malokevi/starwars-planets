import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`
    html {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
    }

    body {
        display: flex;
        flex-flow: column nowrap;
        margin: 0;
        flex-grow: 2;

        #root {
            display: flex;
            flex-flow: column nowrap;
            flex-grow: 2;
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
