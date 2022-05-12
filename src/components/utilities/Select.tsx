import { useId } from "react"
import styled from "styled-components"

type SelectProps = {
    options: string[]
    label: {
        visible: boolean
        text: string
    }
    name: string
    onChange: (e: any) => void
}

const Select = ({ options, label, name, onChange }: SelectProps) => {
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
                defaultValue={-1}
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
    select {
        min-height: 36px;
        padding: 6px;
        width: 100%;
        cursor: pointer;
    }
`

export default Select
