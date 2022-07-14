import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: header;
    display: flex;
    gap: 60px;
    height: 116px;

    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    > h1 {
        margin-left: 123px;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }
`;

export const Section = styled.div`
    width: 630px;
`;

export const Profile = styled(Link)`
    display: flex;
    gap: 15px;    
    align-items: center;
    
    text-align: end;

    width: 300px;

    margin-right: 90px;


    > div p {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div span {
        color: ${({ theme }) => theme.COLORS.GRAY};
        
    }
    
    > img {
        width: 64px;
        height: 64px;

        border: 1px solid gray;
        border-radius: 50%;
    }

    > div p, div span {
        font-size: 14px;
    }
`;
