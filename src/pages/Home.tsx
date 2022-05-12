import planets from "../static/planets-ui.json"
import styled from "styled-components"
import { Col, Container, Row } from "../components/utilities/Grid"
import PlanetGrid, { PlanetType } from "../components/home/PlanetGrid"
import Filters, { FilterDataType } from "../components/home/Filters"
import { useEffect, useState } from "react"
import Sort, { SortType } from "../components/home/Sort"

const planetData = planets.results

const Home = () => {
    const [filteredData, setFilteredData] = useState<PlanetType[]>([])
    const [filters, setFilters] = useState<FilterDataType>()
    const [sortBy, setSortBy] = useState<SortType>()

    useEffect(() => {
        setFilteredData(planetData)
    }, [])

    //filter and sort
    useEffect(() => {
        const filtered = filters
            ? planetData.filter(({ name, climate, terrain }) => {
                  return (
                      (typeof filters.name === "undefined" ||
                          filters.name.toLowerCase() === "all" ||
                          name
                              .toLowerCase()
                              .includes(filters.name.toLowerCase() || "")) &&
                      (typeof filters.climate === "undefined" ||
                          filters.climate.toLowerCase() === "all" ||
                          climate
                              .toLowerCase()
                              .includes(filters.climate.toLowerCase() || "")) &&
                      (typeof filters.terrain === "undefined" ||
                          !!filters.terrain!.reduce((acc, curr) => {
                              if (terrain.includes(curr)) {
                                  return acc + 1
                              }

                              return acc
                          }, 0))
                  )
              })
            : planetData

        const sorted =
            sortBy && typeof sortBy.field !== "undefined"
                ? filtered.sort((a: any, b: any) => {
                      if (
                          typeof sortBy.field !== "undefined" &&
                          sortBy.field !== "none"
                      ) {
                          if (sortBy.type === "integer") {
                              const first =
                                  a[sortBy.field] !== "unknown"
                                      ? parseInt(
                                            Array.isArray(a[sortBy.field])
                                                ? a[sortBy.field].length
                                                : a[sortBy.field]
                                        )
                                      : -1

                              const second =
                                  b[sortBy.field] !== "unknown"
                                      ? parseInt(
                                            Array.isArray(b[sortBy.field])
                                                ? b[sortBy.field].length
                                                : b[sortBy.field]
                                        )
                                      : -1

                              return !sortBy.desc
                                  ? first - second
                                  : second - first
                          } else {
                              const first = a[sortBy.field].toLowerCase()
                              const second = b[sortBy.field].toLowerCase()

                              if (first < second) {
                                  return sortBy.desc ? -1 : 1
                              }
                              if (first > second) {
                                  return sortBy.desc ? 1 : -1
                              }
                              return 0
                          }
                      }

                      return 0
                  })
                : filtered

        setFilteredData(sorted)
    }, [planetData, filters, sortBy])

    return (
        <StyledHome>
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={12} className="grid-filters">
                        <Filters
                            onChange={(filters: any) => setFilters(filters)}
                            planets={planetData}
                        >
                            <Sort
                                onChange={(sort) => setSortBy(sort)}
                                options={[
                                    {
                                        field: "none",
                                        type: "string"
                                    },
                                    {
                                        field: "name",
                                        type: "string"
                                    },
                                    { field: "population", type: "integer" },
                                    { field: "residents", type: "integer" }
                                ]}
                            />
                        </Filters>
                    </Col>
                    <Col lg={9} md={8} sm={12}>
                        <PlanetGrid planets={filteredData} />
                    </Col>
                </Row>
            </Container>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 32px;
    padding: ${({ theme }) => theme.padding.gap} 0;
    flex-grow: 2;

    .planet-grid {
        display: flex;
        flex-flow: row wrap;
        gap: 32px;
    }

    .grid-filters {
        gap: 18px;
    }
`

export default Home
