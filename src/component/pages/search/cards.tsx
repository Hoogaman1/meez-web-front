import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Assets
import { MainField, ImageField } from './cards.style';
import Star from '../../../assets/images/icons/star.svg';
import HalfStar from '../../../assets/images/icons/half-star.svg';
import MocImage from '../../../assets/images/card-slider-moc/1.jpg';

// Utils
import Tools from '../../../utils/tools';

const SearchCards = () => {
    const { locale } = useRouter();

    return (
        <MainField>
            <ul>
                <li>
                    <ImageField image={MocImage.src} className='image_field'></ImageField>
                    <div className='content'>
                        <Link href='/'>رستوران شاندیز جردن</Link>
                        <div className='star'>
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={HalfStar} alt='' className='half_star' />
                            <p>{Tools.numberLangChanger('13', locale!)} نظرات</p>
                        </div>
                        <small>رستوران سنتی</small>
                        <p>تهران \ جردن</p>
                        <div className='button_group'>
                            <div className='active'>اقتصادی</div>
                            <div>نرمال</div>
                            <div>ویژه</div>
                        </div>
                    </div>
                </li>
                <li>
                    <ImageField image={MocImage.src} className='image_field'></ImageField>
                    <div className='content'>
                        <Link href='/'>رستوران شاندیز جردن</Link>
                        <div className='star'>
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={HalfStar} alt='' className='half_star' />
                            <p>{Tools.numberLangChanger('13', locale!)} نظرات</p>
                        </div>
                        <small>رستوران سنتی</small>
                        <p>تهران \ جردن</p>
                        <div className='button_group'>
                            <div className='active'>اقتصادی</div>
                            <div>نرمال</div>
                            <div>ویژه</div>
                        </div>
                    </div>
                </li>
                <li>
                    <ImageField image={MocImage.src} className='image_field'></ImageField>
                    <div className='content'>
                        <Link href='/'>رستوران شاندیز جردن</Link>
                        <div className='star'>
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={HalfStar} alt='' className='half_star' />
                            <p>{Tools.numberLangChanger('13', locale!)} نظرات</p>
                        </div>
                        <small>رستوران سنتی</small>
                        <p>تهران \ جردن</p>
                        <div className='button_group'>
                            <div className='active'>اقتصادی</div>
                            <div>نرمال</div>
                            <div>ویژه</div>
                        </div>
                    </div>
                </li>
                <li>
                    <ImageField image={MocImage.src} className='image_field'></ImageField>
                    <div className='content'>
                        <Link href='/'>رستوران شاندیز جردن</Link>
                        <div className='star'>
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={Star} alt='' />
                            <Image src={HalfStar} alt='' className='half_star' />
                            <p>{Tools.numberLangChanger('13', locale!)} نظرات</p>
                        </div>
                        <small>رستوران سنتی</small>
                        <p>تهران \ جردن</p>
                        <div className='button_group'>
                            <div className='active'>اقتصادی</div>
                            <div>نرمال</div>
                            <div>ویژه</div>
                        </div>
                    </div>
                </li>
            </ul>
        </MainField>
    );
};

export default SearchCards;
