import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Assets
import { MainField } from './profile-dropdown.style';
import Avatar from '../../../assets/images/icons/avatar.svg';

// Hook
import useOutsideClick from '../../../hooks/useOutsideClick';

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
                        <Link href='/'>{t('My Save Resturants')}</Link>
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
