import styled from '@emotion/styled';

export const SearchPageField = styled.main({
    display: 'flex',
    gap: '30px',
    margin: '50px auto !important'
});

export const HotelPageMainField = styled.div({
    display: 'flex',
    gap: '30px',
    margin: '50px auto !important',
    marginTop: '-50px  !important',
    position: 'relative',
    zIndex: '11'
});

export const HotelHeaderField = styled.div<{ image: string }>(props => ({
    width: '100%',
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    position: 'relative',

    button: {
        width: 'max-content',
        padding: '10px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        top: '40px',
        right: '40px',

        '&:hover': {
            backgroundColor: 'white'
        },

        img: {
            width: '15px',
            height: 'auto'
        }
    }
}));
