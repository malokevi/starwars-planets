import planets from "../static/planets-ui.json"
import styled from "styled-components"
import { Col, Container, Row } from "../components/utilities/Grid"
import PlanetGrid from "../components/home/PlanetGrid"
import Filters from "../components/home/Filters"

const Home = () => {
    return (
        <StyledHome>
            <Container>
                <Row>
                    <Col lg={3} md={4} sm={12}>
                        <Filters />
                    </Col>
                    <Col lg={9} md={8} sm={12}>
                        <PlanetGrid planets={planets.results} />
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

    .planet-grid {
        display: flex;
        flex-flow: row wrap;
        gap: 32px;
    }
`

export default Home
