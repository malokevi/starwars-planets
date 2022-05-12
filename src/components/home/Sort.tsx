import { useEffect, useState } from "react"
import styled from "styled-components"
import Select from "../utilities/Select"
import ascIcon from "../../assets/images/asc.png"

export type SortType = {
    desc: boolean
    field?: string
    type?: "string" | "integer"
}

type SortProps = {
    options: {
        field: "name" | "population" | "residents" | "none"
        type: "integer" | "string"
    }[]
    onChange: (sort: SortType) => void
}

const Sort = ({ options, onChange }: SortProps) => {
    const [sort, setSort] = useState<SortType>({ ...options[0], desc: true })

    useEffect(() => {
        onChange(sort)
    }, [sort])

    return (
        <StyledSort>
            <Select
                options={options.map(({ field }) => field)}
                name="sortby"
                label={{
                    text: "Sort By",
                    visible: true
                }}
                onChange={(val) => {
                    const selected = options.filter(
                        ({ field }) => field === val
                    )

                    setSort({ ...sort, ...selected[0] })
                }}
            />
            <button
                disabled={sort.field === "none"}
                type="button"
                className={sort.desc ? "desc" : "asc"}
                onClick={() => setSort({ ...sort, desc: !sort.desc })}
            >
                <img src={ascIcon} alt="" />
            </button>
        </StyledSort>
    )
}

const StyledSort = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 32px;

    button {
        background-color: white;
        width: 40px;
        border-radius: ${({ theme }) => theme.borderRadius};
        padding: 0;
        margin: auto 0 0 auto;
        display: flex;

        &[disabled] {
            opacity: 0.4;
            cursor: default;
        }

        &.desc {
            transform: rotate(180deg);
        }

        img {
            width: 100%;
            margin: auto;
        }
    }

    & > div {
        flex-grow: 2;
    }

    label {
        color: ${({ theme }) => theme.colors.white};
    }
`

export default Sort
