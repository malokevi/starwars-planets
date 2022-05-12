import { motion } from "framer-motion"
import styled from "styled-components"

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
                <h2>Episode 4</h2>
                <h1>A NEW HOPE</h1>
                <p>
                    It is a period of financial turmoil. Rebel factions,
                    encouraged by their fallen leader Satoshi Nakamoto, have won
                    their first victory agains the evil galactic centralized
                    monetary system.
                    <br />
                    <br />
                    Rebel forced have won a key victory, securing financial
                    opportunity for marginalized peoples accross the quadrant
                    and into the outer reaches. The Empire, desperate to retain
                    control, sought to introduce legislation to destroy the
                    entire crypto space.
                    <br />
                    <br />
                    Meanwhile, on a tiny planet on the outer arm of the Milky
                    Way, a web developer creates a demo project...
                </p>
            </motion.div>
        </StyledPhaseThree>
    )
}

const StyledPhaseThree = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    color: #feda4a;
    font-family: "LibreFranklin", sans-serif;
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

        h1 {
            font-size: 100px;
            text-align: center;
        }

        h2 {
            font-size: 60px;
            text-align: center;
            margin: 0 auto;
        }

        p {
            font-size: 100px;
        }
    }
`

export default PhaseThree
