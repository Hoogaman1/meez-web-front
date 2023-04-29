import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './profile-dropdown.style';
import Avatar from '../../../assets/images/icons/avatar.svg';

// Hook
import useOutsideClick from '../../../hooks/useOutsideClick';

import {useEffect} from "react"

// interface Data {
//     phone: string;
//     user: number;
//     email: string;
//     name: string;
//     img: string;
//     create_time: string;
//     update_time: string;
//     suspend: boolean;
//     is_client: boolean;
//     is_supplier: boolean;
//     surname: string;
//     point: number;
//     news: boolean;
//     offer: boolean;
//     sms: boolean;
// }


// interface ComponentTypes {
//     data: Data
// }

const ProfileDropDown = (data: any) => {
    const ref = useRef(null);
    const { t } = useTranslation('navbar');
    const [menuStatus, setMenuStatus] = useState('');

    const openMenu = (res: string) => {
        setMenuStatus(res);
        if (res === menuStatus) {
            setMenuStatus('');
        }
    };

    useEffect(() => {
        console.log(data)
    } , [data])

    useOutsideClick(ref, menuStatus === 'profile', () => {
        openMenu('');
    });

    return (
        <MainField ref={ref}>
            <Image src={Avatar} alt='' className='avatar' onClick={() => openMenu('profile')} />
            <div className={`drop_down ${menuStatus === 'profile' ? 'show' : ''}`}>
                <h3>{t('Hello')}، {data.data.name}</h3>
                <ul>
                    <li>
                        <Link href='/user/dashbord'>{t('My Profile')}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t('My Dinning History')}</Link>
                    </li>
                    <li>
                        <Link href='/user/favorits'>{t('My Save Resturants')}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t('Sign Out')}</Link>
                    </li>
                </ul>
            </div>
        </MainField>
    );
};

export default ProfileDropDown;
