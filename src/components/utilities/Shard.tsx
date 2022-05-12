import styled from "styled-components"

const Shard = ({
    value,
    onDelete
}: {
    value: string
    onDelete: (val: string) => void
}) => {
    return (
        <StyledShard>
            <p>{value}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete(value)
                }}
                className="button-reset"
            >
                &#10006;
            </button>
        </StyledShard>
    )
}

const StyledShard = styled.div`
    display: flex;
    flex-flow: row nowrap;
    border-radius: 20px;
    padding: 4px 16px;
    text-align: center;
    gap: 8px;
    background-color: #006aed;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: default;
    color: white;

    button {
        padding: 0;
        color: white;

        &:hover {
            font-weight: bold;
        }
    }

    p {
        margin: auto auto auto 0;
        line-height: 1.2;
        font-size: ${({ theme }) => theme.fontSize.xxs};
    }
`

export default Shard
