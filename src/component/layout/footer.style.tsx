import styled from '@emotion/styled';

export const FooterField = styled.footer({
    width: '100%',
    backgroundColor: '#2D333F',
    paddingTop: '60px',

    '& .container': {
        display: 'flex',
        gap: '20px',

        div: {
            width: '100%'
        }
    },

    '& .about_us_field': {
        minWidth: '500px !important',

        img: {
            width: '150px',
            height: 'auto',
            marginBottom: '20px'
        }
    },

    '& .about_us': {
        fontSize: '0.9rem',
        color: 'white',
        lineHeight: '31px'
    },

    h3: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        marginBottom: '20px'
    },

    ul: {
        listStyle: 'none',

        a: {
            color: 'white',
            marginBottom: '10px',
            display: 'block'
        }
    },

    '& .copy_right': {
        color: '#959595',
        fontSize: '0.9rem',
        borderTop: '1px solid #434955',
        margin: '0 auto',
        paddingTop: '15px',
        marginTop: '15px',
        textAlign: 'center',
        width: '1320px',
        paddingBottom: '20px'
    }
});
