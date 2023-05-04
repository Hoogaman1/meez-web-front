import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { authModalStatusHandler } from '../../../state-manager/reducer/utils';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { NavBarField, SubNavbarField } from './navbar.style';
import Logo from '../../../assets/images/logo.png';
import Angle from '../../../assets/images/icons/angle.svg';
import Calender from '../../../assets/images/icons/calendar.svg';
import Notification from '../../../assets/images/icons/notification.svg';
import Search from '../../../assets/images/icons/search.svg';

// Component
import ProfileDropDown from './profile-dropdown';
import LocationDropDown from './location-dropdown';
import Button from '@/component/form-group/button';
import PhoneModal from '../auth/phone';
import SearchModal from './search-modal';

const Navbar = () => {
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const userAuthStatus = useSelector((state: RootState) => state.UserInfo.login);
    const [searchModalStatus, setSearchModalStatus] = useState<boolean>(false);
    // const userAuthStatus = useState<boolean>(false);

    const handleOpenAuthModal = (authType: 'register' | 'login') => {
        dispatch(
            authModalStatusHandler({
                status: true,
                type: authType
            })
        );
    };

    return (
        <>
            <SubNavbarField>
                <Link href='/'>{t('For Businesses')}</Link>
                <div className='drop_down_field'>{t('Mobile')}</div>
                <Link href='/'>{t('FAQ')}</Link>
                <div className='drop_down_field'>
                    EN
                    <Image src={Angle} alt='' />
                </div>
            </SubNavbarField>
            <NavBarField>
                <div className='left_field'>
                    <Image src={Logo} alt='main logo' className='logo' />
                    <span className='seprator'></span>
                    <LocationDropDown />
                </div>
                <div className='right_field'>
                    {userAuthStatus ? (
                        <>
                            <ProfileDropDown />
                            <Image src={Calender} alt='' />
                            <Link href='/user/notification'>
                                <Image src={Notification} alt='' />
                            </Link>
                        </>
                    ) : (
                        <div className='auth_btn_group'>
                            <Button text={t('Sign up')} color='secondary' handler={() => handleOpenAuthModal('register')} />
                            <Button text={t('Sign in')} extraClass='login' handler={() => handleOpenAuthModal('login')} />
                        </div>
                    )}
                    <span className='seprator'></span>
                    <Image src={Search} alt='' onClick={() => setSearchModalStatus(true)} />
                </div>
            </NavBarField>
            <PhoneModal />
            <SearchModal status={searchModalStatus} handler={setSearchModalStatus} />
        </>
    );
};

export default Navbar;
