import styled from "styled-components";
import Modal from "react-modal"

export const ModalStyled = styled(Modal).attrs({
    style: {
        overlay:{
            zIndex: 9998,
            backgroundColor: "rgba(0 0 0 / .75)"
        }
}})`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${({theme}) => theme.color.gray_800};
    box-shadow: -1px 1px 20px 7px #00000050;
    max-height: 90vh;
    max-width: 90vw;
    width: 600px;
    border-radius: ${({theme}) => theme.border.radius};
    border: none;
    outline: none;
    transform: translate(-50%, -50%);
    transition: all .3s ease;
    z-index: 99999;
    padding: 2rem;
    overflow-y: auto;

    .delete-comment {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-direction: column;

        h1 {
            color: ${({theme}) => theme.color.gray_100};
        }

        p{
            max-width: 15rem;
            text-align: center;
            color: ${({theme}) => theme.color.gray_300};
        }

        .buttons{
            display: flex;
            justify-content: space-between;
            gap: 1rem
        }
    }
`;