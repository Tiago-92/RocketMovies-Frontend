import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    margin-top: 40px;

    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 16px;
    padding-top: 19px;
    padding-left: 16px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: 1px solid transparent;
    border-radius: 10px;

`;