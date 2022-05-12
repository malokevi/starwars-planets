import theme from "../theme/defaultTheme"
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import { useAppSelector } from "../hooks/store"
import GlobalStyles from "../theme/globalStyles"
import { useEffect, useState } from "react"
import lightTheme from "../theme/lightTheme"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { background, planetPan, darkMode } = useAppSelector(
        ({ settings }) => settings
    ) // todo - seperate intro from App component, optimize
    const [activeTheme, setActiveTheme] = useState({
        ...theme,
        stars: background,
        planetPan: planetPan
    })

    useEffect(() => {
        setActiveTheme(
            darkMode
                ? {
                      ...theme,
                      stars: true,
                      planetPan: planetPan
                  }
                : {
                      ...theme,
                      stars: false,
                      planetPan: planetPan,
                      ...lightTheme
                  }
        )
    }, [darkMode])

    return (
        <StyledComponentsThemeProvider theme={activeTheme}>
            <GlobalStyles />
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider
