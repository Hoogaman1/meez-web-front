import styled from '@emotion/styled';

export const MainField = styled.div({
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: '40px',
    borderRadius: '10px',

    h3: {
        fontSize: '1.5rem',
        paddingBottom: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #EBEBEB'
    },

    ol: {
        listStyle: 'none'
    },

    li: {
        borderBottom: '1px solid #EBEBEB',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '&:last-of-type': {
            borderBottom: 'none'
        },

        '& .left_field': {
            textAlign: 'left'
        },

        small: {
            marginTop: '20px',
            display: 'block'
        },

        b: {
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            span: {
                display: 'block',
                padding: '3px 10px',
                borderRadius: '5px',
                backgroundColor: '#E9C934',
                color: 'white',
                fontWeight: 'normal',
                fontSize: '0.8rem'
            }
        }
    }
});
