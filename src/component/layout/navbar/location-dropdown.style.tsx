import styled from '@emotion/styled';

interface PropsType {
    lang: string;
    rtlLangs: object;
}
export const MainField = styled.div<PropsType>(props => {
    const isRtlLang = props.lang in props.rtlLangs;
    return {
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
            right: isRtlLang ? '0' : 'unset',
            left: !isRtlLang ? '0' : 'unset',
            backgroundColor: 'white',
            borderRadius: '4px',
            width: '450px',
            border: '1px solid #e2e2e2',
            zIndex: '10',

            '&.show': {
                opacity: '1',
                pointerEvents: 'initial'
            }
        },

        '& .col_field': {
            display: 'flex'
        },

        h3: {
            fontSize: '0.9rem',
            fontWeight: 'normal',
            padding: '10px',
            borderBottom: '1px solid #e2e2e2'
        },

        div: {
            width: '100%'
        },

        ul: {
            listStyle: 'none',
            maxHeight: '300px',
            overflow: 'auto',

            img: {
                width: '12px',
                height: 'auto',
                transform: isRtlLang ? 'rotate(90deg)' : 'rotate(-90deg)',
                filter: 'invert(42%)'
            }
        },

        li: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 10px',
            cursor: 'pointer',
            borderRight: isRtlLang ? '2px solid transparent' : 'none',
            borderLeft: !isRtlLang ? '2px solid transparent' : 'none',

            p: {
                fontSize: '0.8rem',
                color: '#999'
            },

            '&.active': {
                borderRight: isRtlLang ? `2px solid ${props.theme.colors.secondary}` : 'none',
                borderLeft: !isRtlLang ? `2px solid ${props.theme.colors.secondary}` : 'none'
            },

            '&:hover': {
                backgroundColor: props.theme.colors.lightSecondary,
                borderRight: isRtlLang ? `2px solid ${props.theme.colors.secondary}` : 'none',
                borderLeft: !isRtlLang ? `2px solid ${props.theme.colors.secondary}` : 'none',

                p: {
                    color: props.theme.colors.secondary
                }
            }
        },

        '& .full_list_link': {
            color: props.theme.colors.secondary,
            fontSize: '0.85rem',
            borderTop: '1px solid #e2e2e2',
            display: 'block',
            padding: '10px'
        }
    };
});
