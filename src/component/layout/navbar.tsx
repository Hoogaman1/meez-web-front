import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

// Assets
import { NavBarField, SubNavbarField } from './navbar.style';
import Logo from '../../assets/images/logo-04.png';
import Location from '../../assets/images/icons/location.svg';
import Angle from '../../assets/images/icons/angle.svg';
import Avatar from '../../assets/images/icons/avatar.svg';
import Calender from '../../assets/images/icons/calendar.svg';
import Notification from '../../assets/images/icons/notification.svg';
import Search from '../../assets/images/icons/search.svg';

const Navbar = () => {
    const { t } = useTranslation('navbar');

    return (
        <>
            <SubNavbarField>
                <Link href='/'>برای مشاغل</Link>
                <div className='drop_down'>اپلیکیشن</div>
                <Link href='/'>پرسش و پاسخ</Link>
                <div className='drop_down'>
                    EN <Image src={Angle} alt='' />
                </div>
                {t('For Businesses')}
            </SubNavbarField>
            <NavBarField>
                <div className='left_field'>
                    <Image src={Logo} alt='main logo' className='logo' />
                    <span className='seprator'></span>
                    <div className='drop_down'>
                        <Image src={Location} alt='' />
                        <Image src={Angle} alt='' />
                    </div>
                </div>
                <div className='right_field'>
                    <Image src={Avatar} alt='' className='avatar' />
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
