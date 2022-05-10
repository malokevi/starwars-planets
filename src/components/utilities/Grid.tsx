import styled from "styled-components"

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export const Container = ({ children }: { children: React.ReactNode }) => {
    return <StyledContainer className="container">{children}</StyledContainer>
}

export const Row = ({ children }: { children: React.ReactNode }) => {
    return <StyledRow className="row">{children}</StyledRow>
}

export const Col = ({
    children,
    className,
    sm = 12,
    md = 12,
    lg = 12
}: {
    className?: string
    children?: React.ReactNode
    sm?: ColSize
    md?: ColSize
    lg?: ColSize
}) => {
    return (
        <StyledCol
            className={`col col-sm-${sm} col-md-${md} col-lg-${lg} ${className}`}
        >
            {children && children}
        </StyledCol>
    )
}

// unique columns per screen size
const RenderCol = (unit: "sm" | "md" | "lg") => {
    return `
        &.col-${unit}-1 {
            width: 8.33%;
        }
        &.col-${unit}-2 {
            width: 16.66%;
        }
        &.col-${unit}-3 {
            width: 25%;
        }
        &.col-${unit}-4 {
            width: 33.33%;
        }
        &.col-${unit}-5 {
            width: 41.66%;
        }
        &.col-${unit}-6 {
            width: 50%;
        }
        &.col-${unit}-7 {
            width: 58.33%;
        }
        &.col-${unit}-8 {
            width: 66.66%;
        }
        &.col-${unit}-9 {
            width: 75%;
        }
        &.col-${unit}-10 {
            width: 83.33%;
        }
        &.col-${unit}-11 {
            width: 91.66%;
        }
        &.col-${unit}-12 {
            width: 100%;
        }
    `
}

const StyledContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`

const StyledRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-grow: 2;
`

const StyledCol = styled.div`
    display: flex;
    flex-flow: column;
    padding: 0 15px;

    @media (min-width: 1201px) {
        ${RenderCol("lg")}
    }

    @media (min-width: 768px) and (max-width: 1200px) {
        ${RenderCol("md")}
    }

    @media (max-width: 767px) {
        ${RenderCol("sm")}
    }
`
