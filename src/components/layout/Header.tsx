import styled from "styled-components"
import { Col, Container, Row } from "../utilities/Grid"
import logo from "../../assets/images/star-wars-logo.png"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Col lg={5} md={6} sm={3}>
                        <img className="logo" src={logo} alt="" />
                    </Col>
                    <Col lg={7} md={6} sm={9}>
                        <p>Nav?</p>
                    </Col>
                </Row>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 12px 0;

    .logo {
        width: 100%;
        max-width: 200px;
    }
`

export default Header
