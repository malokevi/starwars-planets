import "styled-components"

declare module "styled-components" {
  export interface DefaultThemeType {
    borderRadius: string

    colors: {
      main: string
      secondary: string
    }
  }
}
