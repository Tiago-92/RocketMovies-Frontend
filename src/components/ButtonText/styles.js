import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    font-size: 16px;
    
    background-color: transparent;
    border: none;
`;