import styled from '@emotion/styled';

export const MainField = styled.main(props => ({
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: '40px',
    borderRadius: '10px',
    width: '100%',

    ul: {
        listStyle: 'none'
    },

    li: {
        paddingBottom: '25px',
        marginBottom: '25px',
        borderBottom: '1px solid #D8D9DB',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',

        '&:last-of-type': {
            paddingBottom: '0',
            marginBottom: '0',
            borderBottom: 'none'
        }
    },

    '& .star': {
        display: 'flex',
        alignItems: 'center',
        gap: '3px',

        img: {
            width: '11px',
            height: 'auto',
            filter: 'invert(33%) sepia(94%) saturate(4007%) hue-rotate(339deg) brightness(91%) contrast(86%)'
        },

        '& .half_star': {
            filter: 'unset'
        }
    },

    a: {
        color: 'black',
        display: 'block',
        marginBottom: '10px',
        fontSize: '1.2rem'
    },

    p: {
        fontSize: '0.9rem',
        color: '#9b9b9b'
    },

    '& .content': {
        width: '100%'
    },

    small: {
        color: '#9b9b9b'
    },

    '& .button_group': {
        display: 'flex',
        gap: '5px',
        marginTop: '10px',
        width: '300px',

        div: {
            padding: '5px 10px',
            height: '40px',
            width: '100%',
            fontSize: '0.9rem',
            border: '1px solid #ededed',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#838383'
        },

        '& .active': {
            backgroundColor: props.theme.colors.primary,
            color: 'white'
        }
    }
}));

export const ImageField = styled.div<{ image: string }>(props => ({
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '130px',
    height: '130px',
    borderRadius: '8px'
}));
