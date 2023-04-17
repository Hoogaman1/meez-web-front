import styled from '@emotion/styled';

export const MainField = styled.main(props => ({
    width: '400px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: '25px',
    borderRadius: '10px',

    h4: {
        marginBottom: '15px'
    },

    '& .filter_field': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        marginBottom: '30px',

        span: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '7px',
            color: 'white',
            backgroundColor: props.theme.colors.primary,
            flex: '1 0 45%',
            borderRadius: '3px',
            padding: '4px 5px',
            fontSize: '0.9rem',

            img: {
                width: '10px',
                height: 'auto'
            }
        }
    },

    '& .one_line': {
        span: {
            flex: '1 0 10%'
        }
    },

    '& .button_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        button: {
            width: '100%',
            fontSize: '0.9rem'
        }
    }
}));
