import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 1080px;
    height: 222px;

    padding: 32px;
   
   margin-bottom: 40px;

    > div {
        margin-top: 5px;
    }

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINKGRAY};

    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_PINKGRAY};
    border-radius: 16px;

    > h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        margin-top: 5px;
        
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    > footer {
        margin-top: 15px;
    }
`;

export const Star = styled.div`
    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }
`;