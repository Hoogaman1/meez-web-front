import Image from 'next/image';

// Assets
import { HotelPageMainField, HotelHeaderField } from '@/assets/styles/main';
import MocImage from '../../assets/images/card-slider-moc/2.jpg';
import BookMarkIcon from '../../assets/images/icons/bookmark.svg';

// Components
import HotelAside from '@/component/pages/hotel/aside';
import HotelInfo from '@/component/pages/hotel/info';
import LayoutProvider from '@/component/layout/provider';

import { useState, useEffect } from 'react';

// MUI
import Button from '@mui/material/Button';

const HotelPage = () => {
    const [mainData, setMainData] = useState({
        name: "",
        description: "",
        min_price: 1,
        address: "",
        breakfast_start: "",
        breakfast_end: "",
        lunch_start: "",
        lunch_end: "",
        dinner_start: "",
        dinner_end: ""
    });

    useEffect(() => {
        (async () => {
            let indexArray = window.location.pathname.match(/\/hotel\/(\d+)/);

            if(indexArray){
                try {
                    const res = await fetch('/api/s');
                    let f = await res.json();
                    setMainData(f[indexArray[1]]);
                } catch (err) {
                    console.log(err);
                }
            }
        })();
    }, []);

    return (
        <LayoutProvider>
            <HotelHeaderField image={MocImage.src}>
                <Button>
                    <Image src={BookMarkIcon} alt='' />
                    افزودن به لیست علاقه مندی ها
                </Button>
            </HotelHeaderField>
            <HotelPageMainField className='container'>
                <HotelAside />
                <HotelInfo data={mainData} />
            </HotelPageMainField>
        </LayoutProvider>
    );
};

export default HotelPage;
