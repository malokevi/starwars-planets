import styled from "styled-components"
import { motion } from "framer-motion"
import { fadeUp } from "../../theme/motion-variants"

const Card = ({
    children,
    className,
    title
}: {
    children: React.ReactNode
    title?: string
    className?: string
}) => {
    return (
        <StyledCard className={className} variants={fadeUp}>
            {title && (
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
            )}
            <div className="card-body">{children}</div>
        </StyledCard>
    )
}

const StyledCard = styled(motion.div)`
    display: flex;
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    flex-grow: 2;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: 900px) {
        width: 45%;
    }

    @media (min-width: 1200px) {
        width: 30%;
    }

    .card-title {
        padding: 12px 24px;
        background-color: ${({ theme }) => theme.colors.secondary};
        text-transform: uppercase;

        h2 {
            margin: 0;
            color: ${({ theme }) => theme.colors.yellow};
        }
    }

    .card-body {
        padding: 24px;
    }
`

export default Card
