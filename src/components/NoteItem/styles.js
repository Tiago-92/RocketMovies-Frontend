import styled from 'styled-components';

export const Container = styled.div`
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 113px;
        height: 56px;
        
        margin-top: 16px;
        margin-left: 16px;
        margin-bottom: 8px;

        border-radius: 10px;
        
        padding-right: 16px;

        > button {
            position: absolute;
            display: flex;
            margin-left: ${({ isNew }) => isNew ? "140px" : "70px"};
            border: none;
            background: none;

            > svg {
                width: 22px;
                height: 24px;
            }
        }

        .button-delete {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        }

        .button-add {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        }

        > input {
            position: absolute;
            
            height: 56px;
            width: ${({ isNew }) => isNew ? "188px" : "113px"};

            padding-left: 16px;
            
            background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
            color: ${({ theme }) => theme.COLORS.WHITE};

            border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE}` : "none"};
            
            font-size: 16px;

            border-radius: 10px;

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.BLACK};
            }
        }
`;
