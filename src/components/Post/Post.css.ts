import styled from "styled-components";

export const StyledPost = styled.div`
    background-color: ${({theme}) => theme.color.gray_800};
    border-radius: ${({theme}) => theme.border.radius};
    padding: 2.5rem;
    margin-bottom: 2rem;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .profile {
            display: flex;
            gap: 1rem;

            .data {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            span {
                font-size: 0.8rem;
                color: ${({theme})=> theme.color.gray_400};
            }
            
        }
    }

    > .content {
        color: ${({theme})=> theme.color.gray_300};
        padding: 1.5rem 0;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid ${({theme}) => theme.color.gray_600};

        .tags {
            margin-top: 1.8rem;

            li{
                text-decoration: none;
                display: inline;
                margin-right: 0.25rem;
                font-weight: bold;
                color: ${({theme})=> theme.color.green_500};
            }
        }
    }

    > .feedback {
        h1 {
            font-size: 1rem;
        }

        textarea {
            margin: 1rem 0;
            padding: 1rem;
            width: 100%;
            color: ${({theme})=> theme.color.gray_300};
            background-color: ${({theme})=> theme.color.gray_900};
            outline: none;
            border-radius: ${({theme})=> theme.border.radius};
            border: none;
            height: 6rem;
            
            &:focus {
                outline: 1px solid ${({theme})=> theme.color.green_500};
            }
        }
    }
`;
