/* eslint-disable no-unused-vars */
import { useState, ReactNode } from 'react';

// Assets
import { Box, Tab, Tabs } from '@mui/material';
import { MainField } from './info.style';

// Components
import HotelAbout from './about';
import HotelComments from './comments';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role='tabpanel' id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            <div>{children}</div>
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const HotelInfo = () => {
    const [menuValue, setMenuValue] = useState(0);

    const menuValuehandler = (e: any, newValue: number) => {
        let element = null;
        if (newValue === 0) {
            element = document.getElementById('about');
        } else if (newValue === 1) {
            element = document.getElementById('menu');
        } else if (newValue === 2) {
            element = document.getElementById('comments');
        }
        element!.scrollIntoView({ behavior: 'smooth' });
        setMenuValue(newValue);
    };

    return (
        <MainField>
            <div className='tabs_field'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '30px' }}>
                    <Tabs value={menuValue} onChange={menuValuehandler}>
                        <Tab label='درباره رستوران' {...a11yProps(0)} />
                        <Tab label='منو' {...a11yProps(1)} />
                        <Tab label='نظرات' {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={menuValue} index={0}>
                    <HotelAbout />
                </TabPanel>
                <TabPanel value={menuValue} index={1}>
                    منو
                </TabPanel>
                <TabPanel value={menuValue} index={2}>
                    <HotelComments />
                </TabPanel>
            </div>
        </MainField>
    );
};

export default HotelInfo;
