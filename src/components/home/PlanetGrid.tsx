import styled from "styled-components"
import { motion } from "framer-motion"
import Card from "../../components/utilities/Card"
import { staggerChildren } from "../../theme/motion-variants"

type PlanetType = {
    residents: string[]
    terrain: string
    name: string
    climate: string
    population: string
}

type PlanetGridProps = {
    planets: PlanetType[]
}

const PlanetGrid = ({ planets }: PlanetGridProps) => {
    return (
        <StyledPlanetGrid
            variants={staggerChildren}
            initial="hide"
            animate="show"
            className="planet-grid "
        >
            {planets.map(
                ({
                    name,
                    terrain,
                    residents,
                    population,
                    climate
                }: PlanetType) => {
                    return (
                        <Card
                            className="planet-card shadow"
                            key={`planetcard-${name}`}
                        >
                            <h2>{name}</h2>

                            <div className="planet-statistics">
                                <div>
                                    <p>Terrain</p>
                                    <p>{terrain}</p>
                                </div>
                                <div>
                                    <p>Climate</p>
                                    <p>{climate}</p>
                                </div>
                                <div>
                                    <p>Number of Known Residents</p>
                                    <p>{residents.length}</p>
                                </div>
                                <div>
                                    <p>Population</p>
                                    <p>{population}</p>
                                </div>
                            </div>
                        </Card>
                    )
                }
            )}
        </StyledPlanetGrid>
    )
}

const StyledPlanetGrid = styled(motion.div)`
    .planet-card {
        color: white;

        h2 {
            margin: 0 0 24px;
            color: ${({ theme }) => theme.colors.yellow};
        }

        .planet-statistics {
            display: flex;
            flex-flow: column nowrap;
            gap: 18px;

            & > div {
                display: flex;
                flex-flow: column;
                gap: 4px;

                p {
                    margin: 0;

                    &:first-of-type {
                        border-bottom: 1px solid
                            ${({ theme }) => theme.colors.gray};
                        font-weight: bold;
                        padding-bottom: 4px;
                    }
                }
            }
        }
    }
`

export default PlanetGrid
