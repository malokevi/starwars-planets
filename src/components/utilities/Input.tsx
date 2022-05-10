import { useId } from "react"

const Input = () => {
    const id = useId()

    return <input id={id} type="text" name="..." />
}

export default Input
