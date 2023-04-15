import styled from '@emotion/styled';

export const InputField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    width: '100%',

    label: {
        fontSize: '0.85rem'
    },

    input: {
        border: '1px solid #D8D9DB',
        borderRadius: '4px',
        padding: '10px',

        '&::placeholder': {
            fontSize: '0.8rem'
        }
    }
});
