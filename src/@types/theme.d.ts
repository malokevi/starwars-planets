import "styled-components"

declare module "styled-components" {
    export type ColorScheme = {
        colors: {
            text: {
                hard: string
                faded: string
            }
            button: {
                primary: string
                secondary: string
                warning: string
                danger: string
            }
            gray: string
            white: string
            yellow: string
            boxShadow: string
            primary: string
        }
    }

    export interface DefaultTheme extends ColorScheme {
        stars: boolean
        planetPan: boolean
        borderRadius: string

        fontSize: {
            xxs: string
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
            xxl: string
        }

        padding: {
            page: string
            gap: string
        }
    }
}
