import styled from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Contaneir = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;

    margin: auto;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }

    > span {
        font-size: 14px;
        color: #CAC4CF;
    }

    > h2 {
        font-size: 24px;
        color: #F4EDE8;
        margin-top: 48px;
        margin-bottom: 48px;
    }

    > button {
        width: 100%;
        margin-top: 24px;
    }

    > .back {
        background-color: transparent;
        border: none;
        margin-top: 42px;
        display: flex;
        justify-content: center;

        > a {
            display: flex;
            align-items: center;
            gap: 5px;
    
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

            > svg {
                width: 20px;
                height: 20px;
            }
        }     
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
`;