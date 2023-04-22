import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { AboutField } from './about.style';
import StarIcon from '../../../assets/images/icons/star.svg';
import LocationIcon from '../../../assets/images/icons/location.svg';

// Tools
import Tools from '../../../utils/tools';

const HotelAbout = () => {
    const { locale } = useRouter();

    return (
        <AboutField id='about'>
            <h1>رستوران ارکیده کرج</h1>
            <div className='sum_info'>
                <div className='rate sum_info_item'>
                    <Image src={StarIcon} alt='' />
                    <Image src={StarIcon} alt='' />
                    <Image src={StarIcon} alt='' />
                    <Image src={StarIcon} alt='' />
                    <Image src={StarIcon} alt='' />
                </div>
                <div className='sum_info_item'>
                    <p>نظرات ثبت شده :</p>
                    <small>{Tools.numberLangChanger('547', locale!)}</small>
                </div>
                <div className='sum_info_item'>
                    <p>حداقل قیمت : </p>
                    <small>{Tools.numberLangChanger('121,000', locale!)} تومان</small>
                </div>
                <div className='sum_info_item'>
                    <p>دسته بندی :</p>
                    <small>ایرانی | سنتی</small>
                </div>
            </div>
            <div className='contact_field'>
                <Image src={LocationIcon} alt='' />
                تهران - تقاطع بزرگراه شهید چمران و ولی عصر - هتل بین المللی اسپیناس پالاس
            </div>
            <div className='contact_field phone_number'>
                <Image src={LocationIcon} alt='' />
                {Tools.numberLangChanger('021', locale!)}-{Tools.numberLangChanger('44104775', locale!)}
            </div>
            <div className='contact_field'>
                <Image src={LocationIcon} alt='' />
                ساعات کاری
            </div>
            <ul>
                <li>
                    <span></span>
                    <p>صبحانه :</p>
                    <small>روز های تعظیل از ساعت 8 تا 11</small>
                </li>
                <li>
                    <span></span>
                    <p>نهار : </p>
                    <small>از ساعت 12 تا 16</small>
                </li>
                <li>
                    <span></span>
                    <p>شام : </p>
                    <small>از ساعت 19 تا 24</small>
                </li>
            </ul>
            <div className='contact_field'>
                <Image src={LocationIcon} alt='' />
                توضیحات
            </div>
            <p className='about_us_text'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
                بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت
                که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </AboutField>
    );
};

export default HotelAbout;
