import styled, { DefaultTheme, css } from "styled-components";

const variantStyles = (theme: DefaultTheme, variant = 'filled') =>
    ({
        filled: css`
            color: ${theme.color.white};
            background: ${theme.color.green_500};

            &:hover {
                filter: brightness(85%);
            }
        `,
        outline: css`
            color: ${theme.color.green_500};
            background: transparent;
            border: 1px solid ${theme.color.green_500};

            &:hover {
                color: ${theme.color.white};
                background: ${theme.color.green_500};
            }
        `
    }[variant]);

const StyledButton = styled.button<{ $variant: string }>`
    display: flex;
    align-items: center;
    gap: 0.62rem;
    border-radius: ${({theme}) => theme.border.radius};
    padding: 1rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all .2s ease;
    outline: none;
    border: none;

    ${({ theme, $variant }) => variantStyles(theme, $variant)}
`

export { StyledButton }