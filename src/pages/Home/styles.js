import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas:
    "header"
    "content";

    > main {
        display: grid;

        width: 1100px;
        margin-right: 106px;
        margin-left: 123px;

        grid-area: "content";
        overflow-y: auto;
        

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

export const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 20px;

    width: 1100px;

    margin: 50px 123px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const AddMovie = styled(Link)`
    height: 56px;
    width: 207px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
        
    font-size: 16px;
        
    color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
        
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border: 1px solid transparent;
    border-radius: 8px;

    > svg {
        width: 20px;
        height: 20px;
    }
`;