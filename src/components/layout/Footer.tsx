import styled from "styled-components"
import { Col, Container, Row } from "../utilities/Grid"

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Row>
                    <Col>
                        <p>{`In complete violation of Lucasfilm Copyright - ${new Date().getFullYear()}`}</p>
                    </Col>
                </Row>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    padding: 24px 0;
    opacity: 0.9;

    p {
        margin: auto;
        color: ${({ theme }) => theme.colors.white};
    }
`

export default Footer
