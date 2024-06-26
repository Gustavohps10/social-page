import styled from "styled-components";

export const StyledComment = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 1rem;


    .content{
        width: 100%;

        > aside {
            margin-bottom: 1rem;
            padding: 1rem;
            border-radius: ${({theme}) => theme.border.radius};
            background-color: ${({theme}) => theme.color.gray_700};
        
            > header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;

                .data{
                    max-width: 10rem;
                    display: flex;
                    flex-direction: column;

                    strong {
                        font-size: 0.875rem;
                        color: ${({theme}) => theme.color.gray_100};
                    }

                    span {
                        font-size: 0.75rem;
                        color: ${({theme}) => theme.color.gray_400};
                    }
                }

                > svg {
                    cursor: pointer;
                    width: 1.5rem;
                    height: 1.5rem;
                    color:  ${({theme}) => theme.color.gray_400};

                    &:hover {
                        filter: brightness(85%);
                    }
                }
            }

            > p {
                font-size: 0.875rem;
                color: ${({theme}) => theme.color.gray_300};
            }
        }
    }
`

type LikeProps = {
    $active: boolean
}

export const Like = styled.div<LikeProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({theme, $active}) => $active ? theme.color.green_500 : theme.color.gray_400};
    cursor: pointer;

    strong {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    &:hover {
        filter: brightness(85%);
    }
`