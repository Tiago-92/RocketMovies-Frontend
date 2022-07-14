import styled from 'styled-components';

export const Container = styled.button`
    height: 56px;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    border: 1px solid transparent;
    border-radius: 8px;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};        
`;