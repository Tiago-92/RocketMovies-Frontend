import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 300px;

    display: grid;
    grid-template-areas:
    "header"
    "content";
    
    > main {
        margin-top: 40px;
        margin-left: 123px;
        margin-right: 106px;
        margin-bottom: 77px;
        
        display: grid;
        grid-area: content;

        width: 1121px;

        overflow-y: scroll;
        &::-webkit-scrollbar {
            background: transparent;
            width: 9px;
        }    
        
        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
            border: 1px solid transparent;
            border-radius: 15px;
        }    

        &::-webkit-scrollbar-track-piece {
            color: black;
        }
    } 
`;

export const Form = styled.form`
    margin-left: 5px;
    padding-right: 24px;

    > .Button-back {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;

        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }

    > section {
        display: flex;
        gap: 40px;
    }

    > h1 {
        margin-top: 24px;
        color: white;
        font-size: 36px;
    }

    > h2 {
        margin-top: 40px;
        
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 20px;
    }

    > div {
        display: flex;
        flex-direction: row;

        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
        border: 1px solid transparent;
        border-radius: 8px;

        margin-top: 24px;
    }

    > footer {
        display: flex;
        gap: 40px;

        margin-top: 40px;
    }
`;

export const Back = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    font-size: 16px;
    
    background-color: transparent;
    border: none;
`;