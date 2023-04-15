/* eslint-disable indent */
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const ButtonField = styled(Button)(props => ({
    width: 'max-content',
    backgroundColor:
        props.color === 'primary' ? props.theme.colors.primary : props.color === 'secondary' ? props.theme.colors.secondary : '',
    color: 'white',
    minHeight: '35px',

    '&:hover': {
        backgroundColor:
            props.color === 'primary'
                ? props.theme.colors.hover.primary
                : props.color === 'secondary'
                ? props.theme.colors.hover.secondary
                : ''
    }
}));
