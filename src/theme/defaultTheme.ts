import { DefaultTheme } from "styled-components"
import darkTheme from "./darkTheme"

const defaultTheme: DefaultTheme = {
    stars: false,
    planetPan: false,
    fontSize: {
        xxs: "12px",
        xs: "16px",
        sm: "18px",
        md: "20px",
        lg: "24px",
        xl: "30px",
        xxl: "38px"
    },
    padding: {
        gap: "80px",
        page: "120px"
    },
    borderRadius: "8px",
    ...darkTheme
}

export default defaultTheme
