import { useId } from "react"
import styled from "styled-components"

type InputProps = {
    label: {
        text: string
        visible: boolean
    }
    name: string
    onChange: (e: any) => void
}

const Input = ({ label, name, onChange }: InputProps) => {
    const id = useId()
    const { text, visible } = label

    return (
        <StyledInput>
            {visible && <label htmlFor={id}>{text}</label>}
            <input
                onChange={onChange}
                aria-label={!visible ? text : undefined}
                id={id}
                type="text"
                name={name}
            />
        </StyledInput>
    )
}

const StyledInput = styled.div`
    display: flex;
    flex-flow: column nowrap;

    input {
        min-height: 36px;
        padding: 6px;
    }
`

export default Input
