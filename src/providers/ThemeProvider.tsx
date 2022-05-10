import theme from "../theme/defaultTheme"
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import { useAppSelector } from "../hooks/store"
import GlobalStyles from "../theme/globalStyles"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { background, planetPan } = useAppSelector(({ settings }) => settings) // todo - seperate intro from App component, optimize

    return (
        <StyledComponentsThemeProvider
            theme={{ ...theme, stars: background, planetPan: planetPan }}
        >
            <GlobalStyles />
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider
