import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div` 
    align-items: center;
        
    > header {
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINKGRAY};
        
        padding-top: 64px;
        padding-left: 168px;

        > div {
            display: flex;
            align-items: center;
            gap: 7px;

            padding: 64px 0 0 144px;
        }     
    }
`;

export const Form = styled.form`   
    width: 340px;

    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:nth-child(4){
        margin-top: 24px;
    }

    > button {
        opacity: 50%;
        width: 340px;

        margin-top: 24px;
        font-size: 16px;
    }

    > input {
        width: 799px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -84px auto 32px;

    width: 186px;
    height: 186px;

    > img {
        border-radius: 50%;
        width: 186px;
        height: 186px
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 20px;
            height: 20px;
        }
    }    
`;

export const Back = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    
    background: transparent;
    border: none;
    color:  ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    font-size: 16px;
`;