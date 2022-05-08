import styled from "styled-components"
import { motion } from "framer-motion"
import { fade } from "../theme/motion-variants"
import { useEffect, useState } from "react"
import StarWarsLogo from "../assets/star-wars-logo.png"
import Stars from "../assets/stars-background.jpg"
import { useAppDispatch } from "../store/hooks"
import { setShowIntro } from "../store/reducers/introReducer"

const Intro = () => {
  const [phase, setPhase] = useState(1)
  const dispatch = useAppDispatch()

  const handleEndIntro = () => {
    dispatch(setShowIntro(false))
  }

  const renderPhase = () => {
    switch (phase) {
      case 1:
        return <PhaseOne setPhase={setPhase} />
      case 2:
        return <PhaseTwo setPhase={setPhase} />
      case 3:
        return <PhaseThree endIntro={handleEndIntro} />
      default:
        return <></>
    }
  }

  return (
    <StyledIntro>
      <button onClick={() => handleEndIntro()} className="button-reset">
        Skip Intro
      </button>
      {renderPhase()}
    </StyledIntro>
  )
}

const PhaseOne = ({
  setPhase,
}: {
  setPhase: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false)
    }, 4000)
    const timeout2 = setTimeout(() => {
      setPhase(2)
    }, 5500)

    return () => {
      clearInterval(timeout)
      clearInterval(timeout2)
    }
  }, [])

  return (
    <StyledPhaseOne>
      <motion.h1
        variants={fade}
        initial="hide"
        animate={show ? "show" : "hide"}
      >
        A short time ago in a galaxy very,
        <br />
        very near....
      </motion.h1>
    </StyledPhaseOne>
  )
}

const PhaseTwo = ({
  setPhase,
}: {
  setPhase: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <StyledPhaseTwo>
      <motion.img
        variants={{
          start: {
            scale: 1,
            opacity: 1,
          },
          end: {
            scale: 0,
            opacity: 0,
            transition: {
              type: "tween",
              duration: 6,
            },
          },
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

const PhaseThree = ({ endIntro }: { endIntro: () => void }) => {
  useEffect(() => {
    const ref = setTimeout(() => {
      endIntro()
    }, 20000)

    return () => {
      clearTimeout(ref)
    }
  }, [])

  return (
    <StyledPhaseThree>
      <div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </StyledPhaseThree>
  )
}

const StyledIntro = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 2;
  position: relative;

  button {
    position: fixed;
    top: 12px;
    right: 12px;
    font-size: 20px;
    color: white;
    z-index: 2;
  }
`

const StyledPhaseOne = styled.div`
  background-color: black;
  display: flex;
  flex-grow: 2;

  h1 {
    color: #2db5d3;
    margin: auto;
    font-size: 52px;
  }
`

const StyledPhaseTwo = styled.div`
  background-image: url(${Stars});
  background-repeat: repeat;
  flex-grow: 2;
  display: flex;
  background-size: contain;
  overflow: hidden;

  img {
    margin: auto;
    flex-shrink: 0;
    width: 100%;
    max-height: 90vh;
  }
`

const StyledPhaseThree = styled.div`
  background-color: black;
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
  background-image: url(${Stars});
  background-repeat: repeat;
  background-size: contain;

  & > div {
    position: relative;
    top: 9999999999px;
    transform-origin: 50% 100%;
    animation: crawl 20s linear;
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

  @keyframes crawl {
    0% {
      top: 2000px;
      transform: rotateX(20deg) translateZ(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: -4000px;
      transform: rotateX(25deg) translateZ(-2500px);
    }
  }
`

export default Intro
