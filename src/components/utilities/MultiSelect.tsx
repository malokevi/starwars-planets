import { useId } from "react"

const MultiSelect = () => {
    const id = useId()

    return (
        <select name="name" id={id}>
            <option disabled value="-1">
                Select From List
            </option>
        </select>
    )
}

export default MultiSelect
