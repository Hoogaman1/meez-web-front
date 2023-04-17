import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { SliderField, CardField } from './card-slider.style';
import BG1 from '../../assets/images/card-slider-moc/1.jpg';
import Star from '../../assets/images/icons/star.svg';
import HalfStar from '../../assets/images/icons/half-star.svg';
import BookMark from '../../assets/images/icons/bookmark.svg';
import 'swiper/css';
import 'swiper/css/bundle';

// Utils
import Tools from '../../utils/tools';

// Utils
import { rtlLangs } from '../../utils/constants';

// Types
interface ComponentTypes {
    heading: string;
}

SwiperCore.use([Navigation]);

const CardSLider = ({ heading }: ComponentTypes) => {
    const { locale } = useRouter();
    const { t } = useTranslation();

    return (
        <SliderField className='container' rtlLangs={rtlLangs} lang={locale!}>
            <header>
                <h3>{heading}</h3>
                <Link href='/'>{t('View all')}</Link>
            </header>
            <div className='container'>
                <Swiper
                    spaceBetween={15}
                    navigation={true}
                    slidesPerView={5}
                    breakpoints={{
                        1200: {
                            slidesPerView: 5
                        },
                        992: {
                            slidesPerView: 3
                        },
                        600: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                >
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div>اقتصادی</div>
                                        <div className='active'>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div className='active'>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardField>
                            <Link href=''>
                                <Image src={BG1} alt='' />
                                <div className='content'>
                                    <h5>
                                        رستوران ارکیده <Image src={BookMark} alt='' />
                                    </h5>
                                    <small>کوی فراز</small>
                                    <div className='star'>
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={Star} alt='' />
                                        <Image src={HalfStar} alt='' className='half_star' />
                                        <p>
                                            {Tools.numberLangChanger('13', locale!)} {t('review')}
                                        </p>
                                    </div>
                                    <div className='button_group'>
                                        <div className='active'>اقتصادی</div>
                                        <div>نرمال</div>
                                        <div>ویژه</div>
                                    </div>
                                </div>
                            </Link>
                        </CardField>
                    </SwiperSlide>
                </Swiper>
            </div>
        </SliderField>
    );
};

export default CardSLider;
