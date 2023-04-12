import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

// Assets
import { MainField } from './location-dropdown.style';
import Location from '../../../assets/images/icons/location.svg';
import Angle from '../../../assets/images/icons/angle.svg';
import { useRouter } from 'next/router';

// Tools
import Tools from '../../../utils/tools';
import { rtlLangs } from '../../../utils/constants';

const LocationDropDown = () => {
    const ref = useRef(null);
    const { locale } = useRouter();
    const { t } = useTranslation('navbar');
    const [menuStatus, setMenuStatus] = useState('');

    const openMenu = (res: string) => {
        setMenuStatus(res);
        if (res === menuStatus) {
            setMenuStatus('');
        }
    };

    useOutsideClick(ref, menuStatus === 'location', () => {
        openMenu('');
    });

    return (
        <>
            <MainField ref={ref} lang={locale!} rtlLangs={rtlLangs}>
                <div className='drop_down_field' onClick={() => openMenu('location')}>
                    <Image src={Location} alt='' />
                    <Image src={Angle} alt='' />
                </div>
                <div className={`drop_down ${menuStatus === 'location' ? 'show' : ''}`}>
                    <div className='col_field'>
                        <div>
                            <h3>{t('Metro')}</h3>
                            <ul>
                                <li className='active'>
                                    <p>تهران</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>اصفهان</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>شیراز</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>مشهد</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>اراک</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>اصفهان</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>شیراز</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>مشهد</p>
                                    <Image src={Angle} alt='' />
                                </li>
                                <li>
                                    <p>اراک</p>
                                    <Image src={Angle} alt='' />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>{t('Region')}</h3>
                            <ul>
                                <li className='active'>
                                    <p>پرند</p>
                                    <p>{Tools.numberLangChanger('50', locale!)}</p>
                                </li>
                                <li>
                                    <p>تهران</p>
                                    <p>{Tools.numberLangChanger('50', locale!)}</p>
                                </li>
                                <li>
                                    <p>فیروزکوه</p>
                                    <p>{Tools.numberLangChanger('50', locale!)}</p>
                                </li>
                                <li>
                                    <p>اندیشه</p>
                                    <p>{Tools.numberLangChanger('50', locale!)}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href='/' className='full_list_link'>
                        {t('Full list of Metros')}
                    </Link>
                </div>
            </MainField>
        </>
    );
};

export default LocationDropDown;
