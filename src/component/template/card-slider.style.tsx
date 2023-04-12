import styled from '@emotion/styled';

interface SliderFieldpropsTypes {
    lang: string;
    rtlLangs: object;
}

export const SliderField = styled.section<SliderFieldpropsTypes>(props => ({
    '& .container': {
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
        position: 'relative',
        padding: '20px 0'
    },

    '& .swiper-initialized': {
        padding: '10px',
        position: 'unset',
        width: '100%'
    },

    '& .swiper-slide': {
        marginRight: props.lang in props.rtlLangs ? '0 !important' : '0',
        marginLeft: !(props.lang in props.rtlLangs) ? '0 !important' : '0'
    },

    '& .swiper-button-next': {
        left: '-10px !important',
        color: 'black',
        background: 'white',
        borderRadius: '50px',
        height: '40px',
        width: '40px',
        border: '1px solid #D8D9DB',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

        '&::after': {
            fontSize: '0.8rem'
        }
    },

    '& .swiper-button-prev': {
        right: '-10px !important',
        color: 'black',
        background: 'white',
        borderRadius: '50px',
        height: '40px',
        width: '40px',
        border: '1px solid #D8D9DB',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

        '&::after': {
            fontSize: '0.8rem'
        }
    },

    header: {
        marginTop: '35px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #D8D9DB',

        h3: {
            fontSize: '1.3rem',
            color: '#2D333F'
        },

        a: {
            color: props.theme.colors.primary
        }
    }
}));

export const CardField = styled.div({
    border: '1px solid #D8D9DB',
    borderRadius: '5px',
    overflow: 'hidden',

    img: {
        width: '100%',
        height: '132px',
        display: 'block'
    },

    h5: {
        color: '#2D333F',
        fontSize: '1.125rem'
    },

    p: {
        color: '#2a2a2a'
    },

    small: {
        color: '#2a2a2a',
        fontSize: '0.9rem'
    },

    '& .content': {
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        paddingTop: '5px'
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

    '& .info': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        img: {
            width: '10px',
            height: 'auto'
        },

        '& .blur': {
            opacity: '0.4'
        },

        '& .seprator': {
            width: '5px',
            height: '5px',
            display: 'block',
            backgroundColor: '#2a2a2a',
            borderRadius: '5px'
        },

        '& .image_field': {
            display: 'flex',
            alignItems: 'center'
        }
    },

    '& .booked_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: '#2a2a2a',
        fontSize: '0.9rem',

        img: {
            width: '20px',
            height: 'auto'
        }
    },

    '& .button_group': {
        display: 'flex',
        gap: '5px',
        marginTop: '10px',

        button: {
            fontWeight: 'bold',
            padding: '5px 10px',
            height: '30px'
        }
    }
});
