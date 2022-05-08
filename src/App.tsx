import { lazy, Suspense, useEffect } from "react"
import { Route, Routes } from "react-router"
import Layout from "./components/layout/Layout"
import { checkStorage } from "./helpers/localstorage"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { setShowIntro } from "./store/reducers/introReducer"

const Intro = lazy(() => import("./components/Intro"))
const Home = lazy(() => import("./pages/Home"))
const Planet = lazy(() => import("./pages/Planet"))

const App = () => {
  const dispatch = useAppDispatch()
  const intro = useAppSelector(({ intro }) => intro.showIntro)

  useEffect(() => {
    dispatch(setShowIntro(checkStorage("intro") ? false : true))
  }, [])

  return intro ? (
    <Suspense fallback={<div className="placeholder"></div>}>
      <Intro />
    </Suspense>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="planet" element={<Planet />}>
          <Route path=":planet" />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
