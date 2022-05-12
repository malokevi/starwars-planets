import styled from "styled-components"
import React, { useCallback, useEffect, useState } from "react"
import StarWarsLogo from "../assets/images/star-wars-logo.png"
import Stars from "../assets/images/stars-background.jpg"
import { useAppDispatch } from "../hooks/store"
import { setShowIntro } from "../store/reducers/settingsReducer"
import useAudio from "../hooks/useAudio"
import CrawlAudio from "../assets/audio/opening-crawl.mp3"
import ButtonGroup from "./utilities/ButtonGroup"
import preloadImages from "../helpers/preloadImages"
import PhaseOne from "./intro/PhaseOne"
import PhaseTwo from "./intro/PhaseTwo"
import PhaseThree from "./intro/PhaseThree"
import PhaseFour from "./intro/PhaseFour"

const preload = async (imgs: string[]) => {
    await preloadImages(imgs)
}

const Intro = React.memo(() => {
    const [phase, setPhase] = useState(0)
    const dispatch = useAppDispatch()
    const { mute, toggle } = useAudio(CrawlAudio)

    useEffect(() => {
        // preload images into cache to prevent delays
        preload([StarWarsLogo, Stars])
    }, [])

    useEffect(() => {
        phase === 2 && toggle()
    }, [phase])

    const RenderPhase = useCallback(() => {
        switch (phase) {
            case 0:
                return <PhaseZero setPhase={setPhase} />
            case 1:
                return <PhaseOne setPhase={setPhase} />
            case 2:
                return <PhaseTwo setPhase={setPhase} />
            case 3:
                return <PhaseThree setPhase={setPhase} />
            case 4:
                return <PhaseFour />
            default:
                return <p>Invalid State</p>
        }
    }, [phase])

    return (
        <StyledIntro>
            <ButtonGroup className="intro-options">
                <button
                    onClick={() => dispatch(setShowIntro(false))}
                    className="button-reset"
                >
                    Skip Intro
                </button>
                <button onClick={() => mute()} className="button-reset">
                    Mute
                </button>
            </ButtonGroup>
            <RenderPhase />
        </StyledIntro>
    )
})

const PhaseZero = ({
    setPhase
}: {
    setPhase: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <StyledPhaseZero>
            <button onClick={() => setPhase(1)}>Play!</button>
        </StyledPhaseZero>
    )
}

const StyledPhaseZero = styled.div`
    display: flex;
    flex-flow: column;
    flex-grow: 2;

    button {
        margin: auto;
    }
`

const StyledIntro = styled.div`
    display: flex;
    flex-flow: column;
    flex-grow: 2;
    position: relative;

    .intro-options {
        position: fixed;
        top: 12px;
        right: 12px;
        font-size: 20px;
        z-index: 2;

        button {
            color: white;
        }
    }
`

export default Intro
