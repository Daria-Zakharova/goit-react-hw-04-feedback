import styled from "@emotion/styled";

export const Data = styled.ul`
flex-grow: 1;

li {
    display: flex;

    .category {
        text-transform: capitalize;
    }

    .dots {
        margin: 0 4px 2px;
        border-bottom: 1px dotted #000;
        flex-grow: 1;
    }

    .total {
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }

    &:last-child {
        margin-top: 12px;
    }
}`;