/* eslint-disable quotes */
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Assets
import { MainField, SmallText } from './banner.style';
import ResponsiveImg from '../../../assets/images/card-slider-moc/responsive.png';

// Component
import Button from '@/component/form-group/button';

const Banner = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const { t } = useTranslation('common');

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            <MainField className='container'>
                <div>
                    <h3>{domLoaded ? t("Restaurateurs: Dig into the world's most complete restaurant platform") : ''}</h3>
                    <div className='button_group'>
                        <Button text={domLoaded ? t('Learn more') : ''} />
                        <Button text={domLoaded ? t('View plans and pricing') : ''} />
                    </div>
                </div>
                <Image src={ResponsiveImg} alt='' />
            </MainField>
            <SmallText>
                <p>{domLoaded ? t('Favorite restaurant not yet on OpenTable?') : ''}</p>
                <Link href=''>{domLoaded ? t('Suggest a restaurant.') : ''}</Link>
            </SmallText>
        </>
    );
};

export default Banner;
