import styled from '@emotion/styled';

export const NavBarField = styled.nav({
    width: '100%',
    backgroundColor: 'white',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    borderBottom: '1px solid #EBEBEB',

    '& .logo': {
        width: '120px',
        height: 'auto'
    },

    '& .seprator': {
        height: '20px',
        width: '1px',
        backgroundColor: '#dfdfdf',
        display: 'block'
    },

    '& .drop_down_field': {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',

        img: {
            '&:first-of-type': {
                width: '20px',
                height: 'auto'
            },
            '&:last-of-type': {
                width: '15px',
                height: 'auto'
            }
        }
    },

    '& .left_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },

    '& .right_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',

        '& .avatar': {
            width: '30px',
            height: 'auto',
            backgroundColor: '#F1F2F4',
            borderRadius: '50px',
            border: '1px solid #D8D9DB',
            cursor: 'pointer',
            padding: '5px'
        },

        img: {
            width: '20px',
            height: 'auto'
        },

        a: {
            display: 'flex',
            alignItems: 'center'
        }
    },

    '& .auth_btn_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        button: {
            fontSize: '0.8rem',
            minHeight: '33px',
            padding: '0 10px'
        },

        '& .login': {
            backgroundColor: 'white',
            border: '1px solid #D8D9DB',
            color: 'black'
        }
    }
});

export const SubNavbarField = styled.div({
    width: '100%',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F1F2F4',
    gap: '20px',
    padding: '0 20px',

    a: {
        color: '#646464',
        fontSize: '0.8rem',
        lineHeight: '12px'
    },

    '& .drop_down_field': {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#646464',
        fontSize: '0.8rem',
        lineHeight: '12px',

        img: {
            width: '15px',
            height: 'auto',
            filter: 'invert(42%)'
        }
    }
});
