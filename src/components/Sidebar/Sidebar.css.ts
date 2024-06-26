import { HTMLAttributes } from "react";
import styled from "styled-components";

export type StyledSidebarProps = HTMLAttributes<HTMLDivElement> & {
    $active: boolean
}

export const StyledSidebar = styled.aside<StyledSidebarProps>`
    position: sticky;
    top: 1rem;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    transition: all .4s ease;

    .close-icon {
        position: absolute;
        right: 4px;
        top: 4px;
        width: 1.25rem;
        height: 1.25rem;
        padding: .5rem;
        cursor: pointer;
        border-radius: ${({theme}) => theme.border.radius};
        transition: all .2s ease;
        user-select: none;
        box-sizing: content-box;
        display: none;

        &:hover{
            background-color: rgba(0 0 0 / 0.23);
        }
        
    }

    .cover {
        height: 4.5rem;
        width: 100%;
        object-fit: cover;
    }

    .profile {
        position: relative;

        .avatar {
            position: relative;
            left: 50%;
            transform: translatex(-50%);

            margin-top: -15%;
            margin-bottom: 1rem;
        }

        strong, span {
            display: block;
            text-align: center;
        }

        strong {
            font-size: 1rem;
            font-weight: bold;
        }

        span {
            font-size: 0.8rem;
            color: var(--gray-400);
        }
    }

    footer {
        padding: 2rem 0;
        margin-top: 1.5rem;
        border-top: 1px solid var(--gray-600);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 768px) {
        position: fixed;
        height: 100vh;
        z-index: 9999;
        left: 0;
        top: 0;
        border-radius: 0;
        width: 15rem;
        box-shadow: 2px 2px 5px -2px #000;
        transform: ${({$active}) => $active ? 'translate(0)' :  'translate(-100%)' };

        .close-icon {
            display: block;
        }
    }
`