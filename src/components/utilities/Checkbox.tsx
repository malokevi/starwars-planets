import { useId } from "react"
import styled from "styled-components"

const Checkbox = ({
    name,
    onChange,
    value,
    checked,
    label
}: {
    name: string
    onChange: (e: any) => void
    value?: string | number
    checked?: boolean
    label: {
        text: string
        visible: boolean
    }
}) => {
    const id = useId()
    const { text, visible } = label

    return (
        <StyledCheckbox>
            <input
                name={name}
                onChange={onChange}
                value={value}
                id={id}
                checked={checked}
                type="checkbox"
                aria-labelledby={`label_${name}`}
            />
            {visible && <p id={`label_${name}`}>{text}</p>}
        </StyledCheckbox>
    )
}

const StyledCheckbox = styled.label`
    display: flex;
    flex-flow: row nowrap;

    p {
        margin: 0;
    }
`

export default Checkbox
