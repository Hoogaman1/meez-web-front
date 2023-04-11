import Link from 'next/link';
import { useTranslation } from 'next-i18next';

// Assets
import { FooterField } from './footer.style';
import WhiteLogo from '../../assets/images/white-logo.png';
import Image from 'next/image';

const Footer = () => {
    const { t } = useTranslation('footer');

    return (
        <FooterField>
            <div className='container'>
                <div className='about_us_field'>
                    <Image src={WhiteLogo} alt='main logo' />
                    <p className='about_us'>{t('about us')}</p>
                </div>
                <div>
                    <h3>آخرین مقالات</h3>
                    <ul>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>صفحات سایت</h3>
                    <ul>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>تست سایت</h3>
                    <ul>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                        <li>
                            <Link href=''>تست</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='copy_right'>{t('copy Right')}</div>
        </FooterField>
    );
};

export default Footer;
