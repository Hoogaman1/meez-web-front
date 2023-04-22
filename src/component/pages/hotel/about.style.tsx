import styled from '@emotion/styled';

export const AboutField = styled.section({
    h1: {
        fontSize: '2rem',
        marginBottom: '30px',
        paddingBottom: '30px',
        borderBottom: '1px solid #E0E0E0'
    },

    '& .rate': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        img: {
            width: '11px',
            height: 'auto',
            filter: 'invert(87%) sepia(37%) saturate(1275%) hue-rotate(309deg) brightness(98%) contrast(109%)'
        }
    },

    '& .sum_info': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap'
    },

    '& .sum_info_item': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        flex: '1 0 45%',

        small: {
            color: '#686868',
            fontSize: '1rem'
        }
    },

    '& .contact_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: 'black',
        marginTop: '20px',

        img: {
            width: '20px',
            height: 'auto',
            filter: 'invert(96%) sepia(92%) saturate(4818%) hue-rotate(322deg) brightness(91%) contrast(103%)'
        }
    },

    '& .phone_number': {
        color: '#428edd'
    },

    li: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        marginTop: '10px',
        fontSize: '0.9rem',
        paddingRight: '25px',

        span: {
            width: '5px',
            height: '1px',
            backgroundColor: 'black',
            display: 'block'
        },

        p: {
            fontSize: '0.9rem'
        },

        small: {
            color: '#686868'
        }
    },

    '& .about_us_text': {
        marginTop: '20px',
        fontSize: '0.9rem',
        lineHeight: '28px'
    }
});
