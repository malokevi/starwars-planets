import { lazy, Suspense, useEffect } from "react"
import { Route, Routes } from "react-router"
import ThemeProvider from "./providers/ThemeProvider"
import styled from "styled-components"
import Layout from "./components/layout/Layout"
import { checkStorage } from "./helpers/localstorage"
import { useAppDispatch, useAppSelector } from "./hooks/store"
import { setShowIntro } from "./store/reducers/settingsReducer"
import Tatooine from "./assets/images/tatooine.png"
import { motion } from "framer-motion"

const Intro = lazy(() => import("./components/Intro"))
const Home = lazy(() => import("./pages/Home"))

const App = () => {
    const dispatch = useAppDispatch()
    const { showIntro, planetPan } = useAppSelector(({ settings }) => settings) // todo - seperate intro from App component, optimize

    useEffect(() => {
        dispatch(setShowIntro(checkStorage("intro") ? false : true))
    }, [])

    return (
        <ThemeProvider>
            <StyledTatooine
                animate={{ translateY: planetPan ? "-900px" : 0 }}
                transition={{
                    duration: 13,
                    type: "tween",
                    ease: [0.45, 0.6, 0.75, 1]
                }}
                src={Tatooine}
                alt=""
            />
            {showIntro ? (
                <Suspense fallback={<></>}>
                    <Intro />
                </Suspense>
            ) : (
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            )}
        </ThemeProvider>
    )
}

const StyledTatooine = styled(motion.img)`
    width: 1100px;
    max-width: 90%;
    position: fixed;
    right: -200px;
    bottom: -1300px;
    opacity: 0.8;
`

export default App
