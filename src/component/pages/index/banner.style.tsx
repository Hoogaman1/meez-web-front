import styled from '@emotion/styled';

export const MainField = styled.section({
    background: 'linear-gradient(-90deg, rgba(32,11,71,1) 0%, rgba(220,61,63,1) 51%, rgba(251,171,10,1) 100%)',
    padding: '20px 20px 20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '5px',
    marginTop: '40px !important',

    h3: {
        fontSize: '2rem',
        width: '600px',
        color: 'white'
    },

    '& .button_group': {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',

        button: {
            border: '1px solid white',
            height: '50px',
            padding: '0 20px',

            '&:last-of-type': {
                backgroundColor: 'transparent'
            }
        }
    },

    img: {
        width: '500px',
        height: 'auto'
    }
});

export const SmallText = styled.section(props => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    margin: '30px',
    fontWeight: 'bold',

    p: {
        color: '#2d333f'
    },

    a: {
        color: props.theme.colors.primary
    }
}));
