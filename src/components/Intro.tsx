import styled from "styled-components"
import { motion } from "framer-motion"
import { fade } from "../theme/motion-variants"
import React, { useCallback, useEffect, useState } from "react"
import StarWarsLogo from "../assets/images/star-wars-logo.png"
import Stars from "../assets/images/stars-background.jpg"
import { useAppDispatch } from "../hooks/store"
import {
    setShowIntro,
    setBackground,
    setPlanetPan
} from "../store/reducers/settingsReducer"
import useAudio from "../hooks/useAudio"
import CrawlAudio from "../assets/audio/opening-crawl.mp3"
import PanAudio from "../assets/audio/opening-pan.mp3"
import ButtonGroup from "./utilities/ButtonGroup"
import preloadImages from "../helpers/preloadImages"

const preload = async (imgs: string[]) => {
    await preloadImages(imgs)
}

const Intro = React.memo(() => {
    const [phase, setPhase] = useState(0)
    const dispatch = useAppDispatch()
    const { mute, muted, toggle, playing } = useAudio(CrawlAudio)

    useEffect(() => {
        // preload images into cache to prevent delays
        preload([StarWarsLogo, Stars])
    }, [])

    useEffect(() => {
        phase === 2 && toggle()
    }, [phase])

    const RenderPhase = useCallback(() => {
        console.log("phase?", phase)
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

const PhaseOne = ({
    setPhase
}: {
    setPhase: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <StyledPhaseOne>
            <motion.h1
                animate={{
                    opacity: [0, 1, 1, 0]
                }}
                transition={{
                    duration: 5.5,
                    time: [0, 0.25, 0.75, 1]
                }}
                onAnimationComplete={() => setPhase(2)}
            >
                A short time ago in a galaxy very,
                <br />
                very near....
            </motion.h1>
        </StyledPhaseOne>
    )
}

const PhaseTwo = ({
    setPhase
}: {
    setPhase: React.Dispatch<React.SetStateAction<number>>
}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setBackground())
    }, [])

    return (
        <StyledPhaseTwo>
            <motion.img
                variants={{
                    start: {
                        scale: 1,
                        opacity: 1
                    },
                    end: {
                        scale: 0,
                        opacity: 0,
                        transition: {
                            type: "tween",
                            duration: 6
                        }
                    }
                }}
                onAnimationComplete={() => {
                    setPhase(3)
                }}
                initial="start"
                animate="end"
                src={StarWarsLogo}
                alt=""
            />
        </StyledPhaseTwo>
    )
}

const PhaseThree = ({
    setPhase
}: {
    setPhase: React.Dispatch<React.SetStateAction<number>>
}) => {
    return (
        <StyledPhaseThree>
            <motion.div
                animate={{
                    top: ["2000px", "-4000px"],
                    opacity: [1, 1, 0],
                    rotateX: ["20deg", "25deg"],
                    translateZ: ["0px", "-2500px"]
                }}
                transition={{
                    duration: 20,
                    time: [0, 0.8, 1],
                    ease: [0.9, 0.75, 0.6, 0.15]
                }}
                onAnimationComplete={() => setPhase(4)}
            >
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
            </motion.div>
        </StyledPhaseThree>
    )
}

const PhaseFour = () => {
    const { mute, toggle } = useAudio(PanAudio)
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

const StyledPhaseOne = styled.div`
    display: flex;
    flex-grow: 2;

    h1 {
        color: #2db5d3;
        margin: auto;
        font-size: 52px;
    }
`

const StyledPhaseTwo = styled.div`
    flex-grow: 2;
    display: flex;
    overflow: hidden;

    img {
        margin: auto;
        flex-shrink: 0;
        width: 100%;
        max-height: 90vh;
    }
`

const StyledPhaseThree = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    color: #feda4a;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 500%;
    font-weight: 600;
    height: 400px;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 500px;
    text-align: justify;
    overflow: hidden;
    flex-grow: 2;

    & > div {
        position: relative;
        top: 9999999999px;
        transform-origin: 50% 100%;
        width: 160%;

        p {
            font-size: 100px;
        }

        p {
            // color: #f7df73;
            // margin: auto;
            // font-size: 52px;
            // width: 1100px;
            // max-width: 90%;
            // text-align: justify;
            // position: relative;
            // top: 99999px;
            // transform-origin: 50% 100%;
        }
    }
`

const StyledPhaseFour = styled.div`
    flex-grow: 2;
    display: flex;
    overflow: hidden;

    img {
        margin: auto;
        flex-shrink: 0;
        width: 100%;
        max-height: 90vh;
    }
`

export default Intro
