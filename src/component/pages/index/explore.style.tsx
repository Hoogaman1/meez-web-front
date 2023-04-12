import styled from '@emotion/styled';

export const MainField = styled.section(props => ({
    marginTop: '50px !important',

    '& .Mui-selected': {
        color: `${props.theme.colors.primary} !important`
    },

    '& .MuiTabs-indicator': {
        backgroundColor: `${props.theme.colors.primary} !important`
    },

    button: {
        fontWeight: 'bold',
        fontSize: '1rem'
    },

    h3: {
        fontSize: '1.7rem',
        color: '#2d333f',
        marginBottom: '16px'
    }
}));

export const TabsField = styled.div(props => ({
    '& .items_field': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap',
        marginTop: '16px',

        a: {
            color: '#141a26',
            fontSize: '1rem',
            width: '20%',
            padding: '0 16px 16px 0',
            display: 'block',

            '&:hover': {
                color: props.theme.colors.primary
            }
        }
    }
}));
