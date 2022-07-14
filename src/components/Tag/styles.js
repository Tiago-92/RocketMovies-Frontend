import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;

    margin-right: 10px;

    margin-top: 40px;

    border-radius: 8px;

    padding: 5px 14px;

    color: ${({ theme }) => theme.COLORS.GRAY};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;