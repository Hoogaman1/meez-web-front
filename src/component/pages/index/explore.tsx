import { ReactNode, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Tab, Tabs } from '@mui/material';

// Assets
import { MainField, TabsField } from './explore.style';
import Link from 'next/link';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <div>{children}</div>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const Explore = () => {
    const [tabValue, setTabValue] = useState(0);
    const { t } = useTranslation('common');

    const tabsChangeHandler = (e: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <MainField className='container'>
            <h3>{t('Explore OpenTable')}</h3>
            <TabsField>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tabValue} onChange={tabsChangeHandler}>
                        <Tab label={t('National cities/regions')} {...a11yProps(0)} />
                        <Tab label={t('Nearby')} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={tabValue} index={0}>
                    <div className='items_field'>
                        <Link href=''>تهران</Link>
                        <Link href=''>ساری</Link>
                        <Link href=''>قم</Link>
                        <Link href=''>مشهد</Link>
                        <Link href=''>اصفهان</Link>
                        <Link href=''>لرستان</Link>
                        <Link href=''>کرمانشاه</Link>
                        <Link href=''>مازندران</Link>
                        <Link href=''>کیش</Link>
                        <Link href=''>گیلان</Link>
                        <Link href=''>یزد</Link>
                        <Link href=''>سیستان و بلوچستان</Link>
                        <Link href=''>تهران</Link>
                        <Link href=''>ساری</Link>
                        <Link href=''>قم</Link>
                        <Link href=''>مشهد</Link>
                        <Link href=''>اصفهان</Link>
                        <Link href=''>لرستان</Link>
                        <Link href=''>کرمانشاه</Link>
                        <Link href=''>مازندران</Link>
                        <Link href=''>کیش</Link>
                        <Link href=''>گیلان</Link>
                        <Link href=''>یزد</Link>
                        <Link href=''>مازندران</Link>
                        <Link href=''>سیستان و بلوچستان</Link>
                    </div>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <div className='items_field'>
                        <Link href=''>سیستان و بلوچستان</Link>
                        <Link href=''>تهران</Link>
                        <Link href=''>ساری</Link>
                        <Link href=''>قم</Link>
                        <Link href=''>مشهد</Link>
                        <Link href=''>اصفهان</Link>
                        <Link href=''>لرستان</Link>
                        <Link href=''>کرمانشاه</Link>
                        <Link href=''>مازندران</Link>
                        <Link href=''>کیش</Link>
                        <Link href=''>گیلان</Link>
                        <Link href=''>یزد</Link>
                        <Link href=''>مازندران</Link>
                        <Link href=''>سیستان و بلوچستان</Link>
                    </div>
                </TabPanel>
            </TabsField>
        </MainField>
    );
};

export default Explore;
