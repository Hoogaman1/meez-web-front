import styled from '@emotion/styled';

interface propsTypes {
    background: string | undefined;
    heightSize: 'logn' | 'short';
}

export const MainField = styled.div<propsTypes>(props => {
    return {
        padding: '60px 0',
        background: props.background
            ? `url(${props.background})`
            : 'linear-gradient(265deg, rgba(106,114,140,1) 0%, rgba(13,27,68,1) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: 'white',

        h3: {
            fontSize: '3rem'
        }
    };
});
