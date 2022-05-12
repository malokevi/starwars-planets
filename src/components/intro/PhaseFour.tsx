import { useEffect } from "react"
import { useAppDispatch } from "../../hooks/store"
import useAudio from "../../hooks/useAudio"
import {
    setPlanetPan,
    setShowIntro
} from "../../store/reducers/settingsReducer"
import PanAudio from "../../assets/audio/opening-pan.mp3"

const PhaseFour = () => {
    const { toggle } = useAudio(PanAudio)
    const dispatch = useAppDispatch()

    useEffect(() => {
        toggle()
        dispatch(setPlanetPan())

        setTimeout(() => {
            dispatch(setShowIntro(false))
        }, 16000) // wait for pan and music to end
    }, [])

    return <></>
}

export default PhaseFour
