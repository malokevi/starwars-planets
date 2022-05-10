import styled from "styled-components"
import { motion } from "framer-motion"
import { fadeUp } from "../../theme/motion-variants"

const Card = ({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <StyledCard className={className} variants={fadeUp}>
            {children}
        </StyledCard>
    )
}

const StyledCard = styled(motion.div)`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 30%;
    flex-grow: 2;
    padding: 24px;
    border-radius: 8px;
`

export default Card
