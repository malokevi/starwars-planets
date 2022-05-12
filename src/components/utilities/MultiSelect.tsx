import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import caret from "../../assets/images/caret.png"
import Checkbox from "./Checkbox"
import Shard from "./Shard"
import { motion } from "framer-motion"

type MultiSelectValues = string[]

type MultiSelectProps = {
    options: MultiSelectValues
    onChange: (vals: MultiSelectValues) => void
    label: {
        visible: boolean
        text: string
    }
    value?: string[]
}

const MultiSelect = ({ options, onChange, label, value }: MultiSelectProps) => {
    const [selected, setSelected] = useState<MultiSelectValues>([])
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    const { text, visible } = label

    //handle close on outside click/key
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }

        const handleHideDropdown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setShowDropdown(false)
            }
        }

        document.addEventListener("keydown", handleHideDropdown, true)
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true)
            document.removeEventListener("click", handleClickOutside, true)
        }
    }, [])

    useEffect(() => {
        setSelected(value || [])
    }, [value])

    useEffect(() => {
        onChange(selected)
    }, [selected])

    const handleMultiSelection = ({ target }: any) => {
        const val = target.value

        target.checked === false
            ? handleRemove(val)
            : setSelected([...selected, val])
    }

    const handleRemove = (v: string) => {
        setSelected([...selected].filter((val) => val !== v))
    }

    return (
        <StyledMultiSelect ref={ref}>
            {visible && <p id="multiselect-label">{text}</p>}
            <div>
                <button
                    aria-labelledby={visible ? "multiselect-label" : undefined}
                    aria-label={!visible ? text : undefined}
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="ms-selected"
                >
                    <div className="shards">
                        {value &&
                            value.map((item) => (
                                <Shard
                                    key={`shard-${item}`}
                                    onDelete={handleRemove}
                                    value={item}
                                />
                            ))}
                    </div>
                </button>
                <motion.div
                    animate={{ height: showDropdown ? "auto" : 0 }}
                    transition={{
                        type: "tween"
                    }}
                    className="ms-list"
                >
                    {options.map((option) => {
                        return (
                            <Checkbox
                                key={`ms-${option}`}
                                onChange={handleMultiSelection}
                                label={{
                                    text: option,
                                    visible: true
                                }}
                                name={option}
                                value={option}
                                checked={
                                    Array.isArray(value) &&
                                    value.includes(option)
                                }
                            />
                        )
                    })}
                </motion.div>
            </div>
        </StyledMultiSelect>
    )
}

const StyledMultiSelect = styled.div`
    display: flex;
    flex-flow: column;

    #multiselect-label {
        color: ${({ theme }) => theme.colors.text.hard};
        margin: 0;
    }

    & > div {
        display: flex;
        flex-flow: column;

        .ms-selected {
            display: flex;
            flex-flow: row nowrap;
            padding: 6px;
            background-color: white;
            position: relative;
            height: auto;
            min-height: 36px;
            border: 1px solid gray;

            .shards {
                display: flex;
                flex-flow: row wrap;
                gap: 8px 4px;
            }

            &:after {
                content: "";
                display: block;
                margin: auto 0 auto auto;
                width: 12px;
                height: 8px;
                background-repeat: no-repeat;
                background-size: contain;
                background-image: url(${caret});
            }
        }

        .ms-list {
            display: flex;
            flex-flow: column;
            background-color: white;
            max-height: 300px;
            overflow: auto;
            border-bottom: 1px solid gray;
            border-left: 1px solid gray;
            border-right: 1px solid gray;

            label {
                padding: 4px 6px;
                color: #2d2d2d;

                input {
                    margin: auto 16px auto 0;
                }

                &:hover {
                    background-color: #ededed;
                }
            }
        }
    }
`

export default MultiSelect
