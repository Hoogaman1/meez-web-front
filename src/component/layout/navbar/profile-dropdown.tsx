import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './profile-dropdown.style';
import Avatar from '../../../assets/images/icons/avatar.svg';

// Hook
import useOutsideClick from '../../../hooks/useOutsideClick';
import { useDispatch } from "react-redux";

//Reducers
import { logout } from '@/state-manager/reducer/user';
import Button from '@/component/form-group/button';


const ProfileDropDown = () => {
    const ref = useRef(null);
    const { t } = useTranslation('navbar');
    const [menuStatus, setMenuStatus] = useState('');

    const openMenu = (res: string) => {
        setMenuStatus(res);
        if (res === menuStatus) {
            setMenuStatus('');
        }
    };

    useOutsideClick(ref, menuStatus === 'profile', () => {
        openMenu('');
    });

    const dispatch = useDispatch();

    const submitHandlerLogout = () => {
        const userInfo = { id: 0,token:'',isLogged:false};
        dispatch(logout(userInfo));
    };


    return (
        <MainField ref={ref}>
            <Image src={Avatar} alt='' className='avatar' onClick={() => openMenu('profile')} />
            <div className={`drop_down ${menuStatus === 'profile' ? 'show' : ''}`}>
                <h3>{t('Hello')}، نادیه !</h3>
                <ul>
                    <li>
                        <Link href='/'>{t('My Profile')}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t('My Dinning History')}</Link>
                    </li>
                    <li>
                        <Link href='/user/favorits'>{t('My Save Resturants')}</Link>
                    </li>
                    <li>
                        <Link href="/" onClick={submitHandlerLogout} >{t('Sign Out')}</Link>
                    </li>
                </ul>
            </div>
        </MainField>
    );
};

export default ProfileDropDown;
