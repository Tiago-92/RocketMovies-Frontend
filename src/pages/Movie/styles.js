import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas:
    "header"
    "content";

    > main {
        margin-top: 40px;
        margin-left: 123px;
        margin-right: 106px;

        width: 1100px;

        padding-right: 15px;

        grid-area: content;
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

export const Content = styled.div`
    margin-bottom: 156px;
    > button {
            background-color: transparent;
            border: none;
            display: flex;
            gap: 10px;
            
            align-items: center;

            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        }

        > h1 {
            display: flex;
            gap: 19px;
            align-items: center;

            font-size: 36px;
            color: #F4EDE8;

            margin-top: 24px;
            margin-bottom: 24px;

            > svg {
                color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
            }
        }

        > span {
            display: flex;
            gap: 10px;
            align-items: center;

            font-size: 16px;
            color: #F4EDE8;

            > img {
                width: 20px;
                height: 20px;

                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
                border-radius: 50%;
            }

            > svg {
                color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
            }
        }

        > div {
            margin-top: 40px;
        }

        > p {
            font-size: 16px;
            color:#F4EDE8;
            text-align: justify;
            line-height: 21px;
            
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