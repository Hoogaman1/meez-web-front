import styled from '@emotion/styled';

export const CommentField = styled.section({
    h1: {
        fontSize: '2rem',
        margin: '30px 0',
        padding: '30px 0',
        borderBottom: '1px solid #E0E0E0',
        borderTop: '1px solid #E0E0E0'
    },

    '& .rate_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '30px'
    },

    '& .left_field': {
        width: '100%',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',

        '& .row': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },

        '& .progress_bar': {
            width: '100%',
            position: 'relative',
            border: '1px solid #dfdfdf',
            borderRadius: '30px',
            height: '10px'
        }
    },

    '& .rate': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        img: {
            width: '20px',
            height: 'auto',
            filter: 'invert(87%) sepia(37%) saturate(1275%) hue-rotate(309deg) brightness(98%) contrast(109%)'
        }
    },

    '& .right_field': {
        width: 'max-content',

        h5: {
            fontSize: '4rem',
            marginTop: '-10px'
        },

        button: {
            borderRadius: '50px',
            padding: '5px 35px',
            marginTop: '20px'
        }
    },

    '& .comment_text_field': {
        marginTop: '50px',

        ul: {
            listStyle: 'none'
        },

        li: {
            marginBottom: '30px',
            paddingBottom: '30px',
            borderBottom: '1px solid #E0E0E0'
        },

        '& .header': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
            fontWeight: 'bold'
        },

        p: {
            fontSize: '0.9rem',
            lineHeight: '27px'
        }
    }
});

export const ProgressBar = styled.span<{ width: number }>(props => ({
    backgroundColor: props.theme.colors.primary,
    height: '100%',
    width: `calc(${props.width}% * 2 * 10)`,
    borderRadius: '30px',
    display: 'block'
}));

export const Avatar = styled.div<{ image: string }>(props => ({
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '70px',
    height: '70px',
    borderRadius: '50px'
}));
