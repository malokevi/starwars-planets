import { useEffect } from "react"
import { useAppDispatch } from "../../hooks/store"
import styled from "styled-components"
import StarWarsLogo from "../../assets/images/star-wars-logo.png"
import { motion } from "framer-motion"
import { setBackground } from "../../store/reducers/settingsReducer"

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

export default PhaseTwo
