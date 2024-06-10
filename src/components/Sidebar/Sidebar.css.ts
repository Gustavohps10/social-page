import styled from "styled-components";

export const StyledSidebar = styled.aside`
    position: relative;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;

    .cover {
        height: 4.5rem;
        width: 100%;
        object-fit: cover;
    }

    .profile {
        position: relative;

        .avatar {
            outline-offset: 4px;
            outline: 2px solid var(--green-500);
            border-radius: 8px;
            overflow: hidden;
            object-fit: cover;

            width: 3.75rem;
            height: 3.75rem;
            margin-top: -15%;
            margin-bottom: 1rem;
            
            position: relative;
            left: 50%;
            transform: translatex(-50%);
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
`