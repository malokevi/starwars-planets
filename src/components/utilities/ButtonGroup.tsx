import styled from "styled-components"

type ButtonGroupProps = {
    children: React.ReactNode
    vertical?: boolean
    className?: string
}

const ButtonGroup = ({
    children,
    className = "",
    vertical = false
}: ButtonGroupProps) => {
    return (
        <StyledButtonGroup className={className} isVertical={vertical}>
            {children}
        </StyledButtonGroup>
    )
}

const StyledButtonGroup = styled.div<{ isVertical: boolean }>`
    display: flex;
    flex-flow: ${({ isVertical }) => (isVertical ? "column" : "row")} nowrap;
    gap: 12px;
`

export default ButtonGroup
