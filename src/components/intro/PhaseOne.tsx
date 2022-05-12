import { motion } from "framer-motion"
import styled from "styled-components"

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

const StyledPhaseOne = styled.div`
    display: flex;
    flex-grow: 2;

    h1 {
        color: #2db5d3;
        margin: auto;
        font-size: 52px;
    }
`

export default PhaseOne
