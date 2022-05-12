import styled from "styled-components"
import { Col, Container, Row } from "../utilities/Grid"
import logo from "../../assets/images/star-wars-logo.png"
import { Link } from "react-router-dom"
import Toggle from "../utilities/Toggle"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Col lg={5} md={6} sm={3}>
                        <Link to="">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                    </Col>
                    <Col lg={7} md={6} sm={9}>
                        <Toggle />
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

    a {
        display: flex;
    }

    .logo {
        width: 100%;
        max-width: 200px;
        margin: auto auto auto 0;
    }
`

export default Header
