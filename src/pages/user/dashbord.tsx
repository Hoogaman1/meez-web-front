// import Image from 'next/image';

// // Assets
// import { HotelPageMainField, HotelHeaderField } from '@/assets/styles/main';
// import MocImage from '../../assets/images/card-slider-moc/2.jpg';
// import BookMarkIcon from '../../assets/images/icons/bookmark.svg';

// // Components
// import HotelAside from '@/component/pages/hotel/aside';
// import HotelInfo from '@/component/pages/hotel/info';
import LayoutProvider from '@/component/layout/provider';

// import { useState, useEffect } from 'react';

// // MUI
// import Button from '@mui/material/Button';

import { DashbordPageMainField} from '@/assets/styles/main';
import DashbordAside from '@/component/pages/user/dashbord/aside';
import DashbordInfo from '@/component/pages/user/dashbord/info';

const dashbord = () => {

    return (
        <LayoutProvider>
            <DashbordPageMainField className='container'>
                <DashbordAside />
                <DashbordInfo  />
            </DashbordPageMainField>
        </LayoutProvider>
    );
};

export default dashbord;
