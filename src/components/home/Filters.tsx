import { useEffect, useState } from "react"
import styled from "styled-components"
import Input from "../utilities/Input"
import MultiSelect from "../utilities/MultiSelect"
import Select from "../utilities/Select"
import { PlanetType } from "./PlanetGrid"

const initFilters = {
    name: undefined,
    climate: undefined,
    terrain: undefined
}

export type FilterDataType = {
    name?: string
    climate?: string
    terrain?: string[]
}

type FiltersProps = {
    planets: PlanetType[]
    onChange: (data: FilterDataType) => void
    children: React.ReactNode
}

const Filters = ({ planets, onChange, children }: FiltersProps) => {
    const [selectData, setSelectData] = useState<Set<string>>(new Set())
    const [multiData, setMultiData] = useState<Set<string>>(new Set())
    const [filters, setFilters] = useState<FilterDataType>(initFilters)

    useEffect(() => {
        onChange(filters)
    }, [filters])

    useEffect(() => {
        const { climate, terrain } = parseFiltersData(planets)

        setMultiData(new Set(terrain))
        setSelectData(new Set(climate))
    }, [planets])

    return (
        <StyledFilters>
            <div className="filters-heading">
                <h2>Filters</h2>
                <button
                    type="button"
                    onClick={() => {
                        setFilters(initFilters)
                    }}
                    className="button-reset"
                >
                    Clear all
                </button>
            </div>

            <div>
                <Input
                    label={{
                        text: "Name",
                        visible: true
                    }}
                    onChange={({ target }: any) =>
                        setFilters({
                            ...filters,
                            name:
                                target.value.length > 0
                                    ? target.value
                                    : undefined
                        })
                    }
                    value={filters.name}
                    name="textfilter"
                />
                <Select
                    label={{
                        visible: true,
                        text: "Climate"
                    }}
                    onChange={(value: string | undefined) => {
                        setFilters({
                            ...filters,
                            climate: value
                        })
                    }}
                    value={filters.climate}
                    name="climateselect"
                    options={["All", ...Array.from(selectData)]}
                />
                <MultiSelect
                    label={{
                        text: "Terrain",
                        visible: true
                    }}
                    onChange={(data) => {
                        setFilters({
                            ...filters,
                            terrain: data.length > 0 ? data : undefined
                        })
                    }}
                    options={Array.from(multiData)}
                    value={filters.terrain}
                />
                {children}
            </div>
        </StyledFilters>
    )
}

const parseFiltersData = (planets: PlanetType[]) => {
    const init: {
        terrain: string[]
        climate: string[]
    } = {
        terrain: [],
        climate: []
    }

    return planets.reduce((acc, planet) => {
        let { climate, terrain } = planet
        return {
            ...acc,
            terrain: [...(acc["terrain"] || []), ...terrain.split(", ")],
            climate: [...(acc["climate"] || []), ...climate.split(", ")]
        }
    }, init)
}

const StyledFilters = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    position: sticky;
    top: 24px;

    .filters-heading {
        display: flex;
        flex-flow: row nowrap;
        margin: 0 0 24px;

        h2 {
            margin: 0;
            color: ${({ theme }) => theme.colors.text.hard};
        }

        button {
            margin: auto 0 0 auto;
            color: ${({ theme }) => theme.colors.text.hard};

            &:hover {
                text-decoration: underline;
            }
        }
    }

    & > div:last-of-type {
        display: flex;
        flex-flow: column nowrap;
        gap: 18px;
    }

    label {
        color: ${({ theme }) => theme.colors.text.hard};
    }

    .head {
        height: 135px;
        width: 100%;
        border-radius: 300px 300px 0 0;
        background-color: #dbdbe7;
        padding: 12px;

        span {
            height: 40px;
            width: 100%;
            border-radius: 100px 100px 0 0;
        }
    }
`

export default Filters
