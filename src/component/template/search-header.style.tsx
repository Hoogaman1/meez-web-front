import styled from '@emotion/styled';

interface propsTypes {
    background: string | undefined;
    heightSize: 'logn' | 'short';
    lang: string;
    rtlLangs: object;
}

export const MainField = styled.div<propsTypes>(props => {
    const isRtlLang = props.lang in props.rtlLangs;
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
            fontSize: '2rem'
        },

        '& .search_box': {
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            justifyContent: 'center'
        },

        '& .group_field': {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: 'white'
        },

        '& .select_field': {
            display: 'flex',
            alignItems: 'center',

            img: {
                width: '18px',
                height: 'auto',
                position: 'relative',
                top: '-2px'
            },

            '& .MuiInputBase-root': {
                borderRadius: '0',
                padding: '2px 0',
                width: '120px',
                backgroundColor: 'white',
                height: '41px',
                paddingLeft: isRtlLang ? '35px !important' : '0 !important',
                paddingRight: !isRtlLang ? '35px !important' : '0 !important',
                fontSize: '0.9rem'
            },

            '& .MuiAutocomplete-endAdornment': {
                left: isRtlLang ? '5px !important' : 'unset !important',
                right: !isRtlLang ? '5px !important' : 'unset !important'
            },

            '& .MuiAutocomplete-clearIndicator': {
                display: 'none'
            },

            fieldset: {
                border: 'none'
            }
        },

        '& .date_picker': {
            '& .MuiFormControl-root': {
                direction: isRtlLang ? 'ltr' : 'rtl'
            },

            '& .MuiInputBase-root': {
                borderRadius: '0',
                width: '165px',
                backgroundColor: 'white',
                height: '41px',
                fontSize: '0.9rem'
            },

            '& .MuiAutocomplete-clearIndicator': {
                display: 'none'
            },

            fieldset: {
                border: 'none'
            }
        },

        '& .seprator': {
            display: 'block',
            width: '1px',
            height: '41px',
            backgroundColor: '#EBEBEB',
            marginLeft: isRtlLang ? '10px' : '0',
            marginRight: !isRtlLang ? '10px' : '0'
        },

        '& .search_input_field': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',

            img: {
                width: '14px',
                height: '35px',
                backgroundColor: 'white',
                position: 'absolute',
                right: isRtlLang ? '7px' : 'unset',
                left: !isRtlLang ? '7px' : 'unset',
                top: '3px'
            },

            input: {
                paddingRight: isRtlLang ? '33px' : 'unset',
                paddingLeft: !isRtlLang ? '33px' : 'unset',
                width: '250px'
            }
        },

        '& .search_btn': {
            width: '120px',
            height: '41px'
        }
    };
});
