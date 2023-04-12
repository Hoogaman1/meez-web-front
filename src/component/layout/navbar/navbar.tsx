import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

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

const Navbar = () => {
    const { t } = useTranslation('navbar');

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
                    <ProfileDropDown />
                    <Image src={Calender} alt='' />
                    <Image src={Notification} alt='' />
                    <span className='seprator'></span>
                    <Image src={Search} alt='' />
                </div>
            </NavBarField>
        </>
    );
};

export default Navbar;
