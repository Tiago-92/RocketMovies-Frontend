import styled from 'styled-components';

export const Add = styled.button`
        height: 56px;
        width: 100%;
        
        font-size: 16px;
        
        color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        border: 1px solid transparent;
        border-radius: 8px;
`;