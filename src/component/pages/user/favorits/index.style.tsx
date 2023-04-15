import styled from '@emotion/styled';

interface ItemImagePropsType {
    background: string;
}

export const MainField = styled.div(props => ({
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: '40px',
    borderRadius: '10px',

    h3: {
        fontSize: '1.5rem',
        paddingBottom: '20px',
        marginBottom: '20px',
        borderBottom: '1px solid #EBEBEB'
    },

    ol: {
        listStyle: 'none'
    },

    li: {
        borderBottom: '1px solid #EBEBEB',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '&:last-of-type': {
            borderBottom: 'none'
        },

        a: {
            button: {
                minWidth: 'max-content',
                minHeight: '44px',
                padding: '10px 30px',
                fontSize: '0.8rem'
            }
        },

        '& .left_field': {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',

            '& .content': {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
            }
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

        '& .remove_item': {
            fontSize: '0.9rem',
            cursor: 'pointer',
            color: '#666666',

            '&:hover': {
                color: props.theme.colors.primary
            }
        },

        '& .tag': {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: '#666666',

            span: {
                display: 'flex',
                width: '1px',
                backgroundColor: '#EBEBEB',
                height: '10px'
            }
        }
    }
}));

export const ItemImage = styled.div<ItemImagePropsType>(props => ({
    backgroundImage: `url(${props.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100px',
    height: '100px',
    borderRadius: '5px'
}));
