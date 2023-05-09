import styled from '@emotion/styled';

export const MainField = styled.div({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '& .drop_down': {
        opacity: '0',
        pointerEvents: 'none',
        transition: 'all 0.1s linear 0s',
        position: 'absolute',
        top: '40px',
        backgroundColor: 'white',
        borderRadius: '4px',
        width: '250px',
        border: '1px solid #e2e2e2',

        '&.show': {
            opacity: '1',
            zIndex:5,
            pointerEvents: 'initial'
        },

        h3: {
            fontSize: '0.8rem',
            padding: '7px 15px'
        },

        ul: {
            listStyle: 'none',

            li: {
                '&:last-of-type': {
                    a: {
                        color: '#DA3743'
                    }
                }
            },

            a: {
                color: 'black',
                fontSize: '0.8rem',
                transition: 'all linear 0.1s',
                padding: '7px 15px',
                display: 'block',

                '&:hover': {
                    backgroundColor: '#eeeeee'
                }
            }
        }
    }
});
