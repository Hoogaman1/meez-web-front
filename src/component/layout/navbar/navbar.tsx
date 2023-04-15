import { useTranslation } from 'next-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { loginModalStatusHandler, registerModalStatusHandler } from '../../../state-manager/reducer/utils';
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

const Navbar = () => {
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const userAuthStatus = useSelector((state: RootState) => state.UserInfo.login);

    const handleOpenAuthModal = (authType: 'register' | 'login') => {
        dispatch(authType === 'register' ? registerModalStatusHandler(true) : loginModalStatusHandler(true));
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
                            <Image src={Notification} alt='' />
                        </>
                    ) : (
                        <div className='auth_btn_group'>
                            <Button text={t('Sign up')} color='secondary' handler={() => handleOpenAuthModal('register')} />
                            <Button text={t('Sign in')} extraClass='login' handler={() => handleOpenAuthModal('login')} />
                        </div>
                    )}
                    <span className='seprator'></span>
                    <Image src={Search} alt='' />
                </div>
            </NavBarField>
            <PhoneModal />
        </>
    );
};

export default Navbar;
