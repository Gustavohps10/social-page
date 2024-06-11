import styled from "styled-components";

export const StyledPost = styled.div`
    background-color: ${({theme}) => theme.color.gray_800};
    border-radius: ${({theme}) => theme.border.radius};
    padding: 2.5rem;
`;
