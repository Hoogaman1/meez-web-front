import styled from '@emotion/styled';

export const MainField = styled.section(props => ({
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: '40px',
    borderRadius: '10px',
    width: '100%',
    background: 'white',

    '& .tabs_field': {
        width: '100%',

        '& .Mui-selected': {
            color: props.theme.colors.primary
        },

        '& .MuiTabs-indicator': {
            backgroundColor: props.theme.colors.primary
        }
    },

    '& .MuiBox-root': {
        position: 'sticky',
        top: '0',
        backgroundColor: 'white',
        zIndex: '5'
    }
}));
