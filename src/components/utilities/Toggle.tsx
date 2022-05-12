import styled from "styled-components"
import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../hooks/store"
import { setDarkMode } from "../../store/reducers/settingsReducer"

const Toggle = () => {
    const dispatch = useAppDispatch()
    const dark = useAppSelector(({ settings }) => settings.darkMode)

    return (
        <StyledToggle>
            <p>Dark</p>
            <button
                onClick={() => {
                    dispatch(setDarkMode(!dark))
                }}
                className="button-reset"
                aria-label="Toggle Dark Mode"
                type="button"
            >
                <motion.span
                    variants={{
                        active: {
                            marginLeft: "50px"
                        },
                        inactive: {
                            marginLeft: 0
                        }
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                    initial="inactive"
                    animate={dark ? "inactive" : "active"}
                />
            </button>
            <p>Light</p>
        </StyledToggle>
    )
}

const StyledToggle = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    margin: 32px auto 0;

    @media (min-width: 768px) {
        margin: auto 0 auto auto;
    }

    p {
        margin: auto 0;
        color: ${({ theme }) => theme.colors.yellow};
    }

    & > button {
        display: flex;
        padding: 4px;
        width: 86px;
        background-color: #d1d1d1 !important;
        border-radius: 40px;
        height: 35px;

        span {
            display: block;
            height: 28px;
            width: 28px;
            border-radius: 100px;
            background-color: #3c3c3c;
        }
    }
`

export default Toggle
