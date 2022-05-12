import { useId } from "react"
import styled from "styled-components"

type SelectProps = {
    options: string[]
    label: {
        visible: boolean
        text: string
    }
    name: string
    value?: string
    onChange: (e: any) => void
}

const Select = ({ options, label, name, onChange, value }: SelectProps) => {
    const id = useId()
    const { visible, text } = label

    const handleChange = ({ target }: any) => {
        onChange(target.value !== "-1" ? target.value : undefined)
    }

    return (
        <StyledSelect>
            {visible && <label htmlFor={id}>{text}</label>}
            <select
                aria-label={!visible ? text : undefined}
                name={name}
                id={id}
                onChange={handleChange}
                value={value || -1}
            >
                {options.map((option) => {
                    return (
                        <option key={`select-${option}`} value={option}>
                            {option}
                        </option>
                    )
                })}
            </select>
        </StyledSelect>
    )
}

const StyledSelect = styled.div`
    label {
        color: ${({ theme }) => theme.colors.text.hard} !important;
    }

    select {
        min-height: 36px;
        padding: 6px;
        width: 100%;
        cursor: pointer;
        text-transform: capitalize;
    }
`

export default Select
