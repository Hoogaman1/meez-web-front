import styled from '@emotion/styled';

export const AsideField = styled.aside(props => ({
    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        padding: '20px',
        borderRadius: '10px',
        position: 'sticky',
        top: '20px',

        a: {
            color: '#999',
            fontSize: '0.9rem',
            fontWeight: 'bold',

            '&:hover': {
                color: props.theme.colors.primary
            },

            '&.active': {
                color: 'black'
            }
        }
    }
}));
