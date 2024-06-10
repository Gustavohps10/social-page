import styled from "styled-components";

const StyledButton = styled.button<{ $outline?: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.62rem;

    border: ${({theme}) => `1px solid ${theme.color.green_500}`};
    border-radius: ${({theme}) => theme.border.radius};
    padding: 1rem 1.5rem;

    background-color: transparent;
    color: ${({theme}) => theme.color.green_500};
    font-weight: bold;
    cursor: pointer;
`

export { StyledButton }