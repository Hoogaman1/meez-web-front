import styled from '@emotion/styled';

interface PhoneFieldPropsType {
    lang: string;
    rtlLangs: object;
}

interface OTPFieldTypes {
    lang: string;
    rtlLangs: object;
}

export const PhoneField = styled.div<PhoneFieldPropsType>(props => ({
    width: '100%',
    padding: '40px 20px',
    textAlign: props.lang in props.rtlLangs ? 'right' : 'left',
    minHeight: '400px',

    h3: {
        marginBottom: '20px',
        fontSize: '1.2rem'
    },

    '& .input_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'ltr',
        gap: '10px',
        marginTop: '20px',
        position: 'relative',

        '& .selected_image': {
            position: 'absolute',
            left: '6px',
            zIndex: '1',
            width: '20px'
        },

        label: {
            display: 'none'
        },

        legend: {
            display: 'none'
        },

        '& .MuiOutlinedInput-root': {
            paddingBottom: '0 !important',
            paddingTop: '0 !important',
            background: '#323b44',
            height: '40px',

            '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #E4E4E4'
                }
            }
        },

        fieldset: {
            top: '0px'
        },

        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E4E4E4',
            height: '40px'
        },

        span: {
            fontSize: '0.8rem',
            textAlign: 'left'
        },

        '& .MuiOutlinedInput-input': {
            padding: '0 0 0 25px !important'
        },

        '& .MuiPaper-root': {
            width: '250px',
            marginTop: '10px'
        },

        '& .MuiOutlinedInput-root ': {
            backgroundColor: 'white'
        },

        '& .MuiAutocomplete-listbox': {
            maxHeight: '160px'
        }
    },

    '& .modal_footer': {
        marginTop: '30px',

        button: {
            width: '100%'
        }
    }
}));

export const OTPField = styled.div<OTPFieldTypes>(props => ({
    width: '100%',
    padding: '40px 20px',
    textAlign: props.lang in props.rtlLangs ? 'right' : 'left',

    h3: {
        marginBottom: '20px',
        fontSize: '1.2rem'
    },

    input: {
        marginTop: '20px'
    },

    '& .modal_footer': {
        marginTop: '30px',

        button: {
            width: '100%'
        }
    }
}));

export const UserInfoField = styled.div<OTPFieldTypes>(props => ({
    width: '100%',
    padding: '40px 20px',
    textAlign: props.lang in props.rtlLangs ? 'right' : 'left',

    h3: {
        marginBottom: '20px',
        fontSize: '1.2rem'
    },

    p: {
        marginBottom: '30px'
    },

    input: {
        marginBottom: '20px'
    },

    '& .modal_footer': {
        marginTop: '10px',

        button: {
            width: '100%'
        }
    }
}));
