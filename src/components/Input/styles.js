import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
  
    margin-top: 8px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 10px;

    > input {
        width: 100%;
        height: 56px;
        padding-left: 10px;
        
        background-color: transparent;
        border: none;

        font-size: 16px;
        color: white;
    }
    
    > svg {
        margin-left: 12px;
        color: gray;
        
    }
`;    
   