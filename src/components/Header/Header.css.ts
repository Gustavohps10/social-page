import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--gray-800);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    min-height: 4.8rem;

    font-weight: bold;
    font-size: 1.25rem;

    > div{
        display: flex;
        align-items: center;
        gap: 1rem;
        
        .logo {
            height: 2rem;
        }
    }

    .menu-icon {
        width: 1.5rem;
        height: 1.5rem;
        box-sizing: content-box;
        padding: .7rem;
        cursor: pointer;
        border-radius: 100%;
        transition: all .2s ease;
        user-select: none;
        display: none;

        &:hover{
            background-color: rgba(0 0 0 / 0.23);
        }
    }

    @media(max-width: 768px) {
        .menu-icon {
            display: block;
        }
    }
    
`