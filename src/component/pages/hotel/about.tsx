import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { AboutField } from './about.style';
import StarIcon from '../../../assets/images/icons/star.svg';
import LocationIcon from '../../../assets/images/icons/location.svg';

import PropTypes from 'prop-types';



// Tools
import Tools from '../../../utils/tools';

interface Data{
    name: string;
    description: string;
    min_price: number;
    address: string;
    breakfast_start: string;
    breakfast_end: string;
    lunch_start: string;
    lunch_end: string;
    dinner_start: string;
    dinner_end: string;
}

interface HotelInfoProps {
    data: Data;
}

const HotelAbout = (props: HotelInfoProps) => {
    const { locale } = useRouter();
    return (
        <AboutField id='about'>
            <h1>{props?.data.name}</h1>
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
                    <small></small>
                </div>
                <div className='sum_info_item'>
                    <p>حداقل قیمت : </p>
                    <small>{props?.data.min_price} تومان</small>
                </div>
                <div className='sum_info_item'>
                    <p>دسته بندی :</p>
                    <small>ایرانی | سنتی</small>
                </div>
            </div>
            <div className='contact_field'>
                <Image src={LocationIcon} alt='' />
                {props?.data.address}
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
                    <small> ساعت {props?.data.breakfast_start} تا {props?.data.breakfast_end}</small>
                </li>
                <li>
                    <span></span>
                    <p>نهار : </p>
                    <small>از ساعت {props?.data.lunch_start} تا {props?.data.lunch_end}</small>
                </li>
                <li>
                    <span></span>
                    <p>شام : </p>
                    <small>از ساعت {props?.data.dinner_start} تا {props?.data.dinner_end}</small>
                </li>
            </ul>
            <div className='contact_field'>
                <Image src={LocationIcon} alt='' />
                توضیحات
            </div>
            <p className='about_us_text'>
                {props?.data.description}
            </p>
        </AboutField>
    );
};

HotelAbout.propTypes = {
    data: PropTypes.array.isRequired,
};

export default HotelAbout;
