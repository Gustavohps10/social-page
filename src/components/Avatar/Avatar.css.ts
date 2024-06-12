import type {ImgHTMLAttributes} from "react"
import styled, { css } from "styled-components";

export type StyledAvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
    $outline?: boolean
}

export const StyledAvatar = styled.img<StyledAvatarProps>`
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;

    width: 3.75rem;
    height: 3.75rem;

    ${({ $outline }) => $outline && css`
        outline-offset: 4px;
        outline: 2px solid var(--green-500);
    `}
`