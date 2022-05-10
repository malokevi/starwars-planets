import styled from "styled-components"

const Filters = () => {
    return <StyledFilters></StyledFilters>
}

const StyledFilters = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 300px;

    .head {
        height: 135px;
        width: 100%;
        border-radius: 300px 300px 0 0;
        background-color: #dbdbe7;
        padding: 12px;

        span {
            height: 40px;
            width: 100%;
            border-radius: 100px 100px 0 0;
        }
    }
`

export default Filters
