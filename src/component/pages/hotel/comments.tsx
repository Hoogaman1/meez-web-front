import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { CommentField, ProgressBar, Avatar } from './comments.style';
import StarIcon from '../../../assets/images/icons/star.svg';
import MocBackground from '../../../assets/images/card-slider-moc/2.jpg';

// Tools
import Tools from '../../../utils/tools';

// Components
import Button from '@/component/form-group/button';

const HotelComment = () => {
    const { locale } = useRouter();
    return (
        <CommentField id='comments'>
            <h1>نظرات کاربران</h1>
            <div className='rate_field'>
                <div className='right_field'>
                    <p>امتیاز</p>
                    <h5>{Tools.numberLangChanger('4.7', locale!)}</h5>
                    <div className='rate sum_info_item'>
                        <Image src={StarIcon} alt='' />
                        <Image src={StarIcon} alt='' />
                        <Image src={StarIcon} alt='' />
                        <Image src={StarIcon} alt='' />
                        <Image src={StarIcon} alt='' />
                    </div>
                    <Button text='ثبت نظر' />
                </div>
                <div className='left_field'>
                    <div className='row'>
                        <p>{Tools.numberLangChanger('5', locale!)}</p>
                        <div className='progress_bar'>
                            <ProgressBar width={5}></ProgressBar>
                        </div>
                    </div>
                    <div className='row'>
                        <p>{Tools.numberLangChanger('4', locale!)}</p>
                        <div className='progress_bar'>
                            <ProgressBar width={4}></ProgressBar>
                        </div>
                    </div>
                    <div className='row'>
                        <p>{Tools.numberLangChanger('3', locale!)}</p>
                        <div className='progress_bar'>
                            <ProgressBar width={3}></ProgressBar>
                        </div>
                    </div>
                    <div className='row'>
                        <p>{Tools.numberLangChanger('2', locale!)}</p>
                        <div className='progress_bar'>
                            <ProgressBar width={2}></ProgressBar>
                        </div>
                    </div>
                    <div className='row'>
                        <p>{Tools.numberLangChanger('1', locale!)}</p>
                        <div className='progress_bar'>
                            <ProgressBar width={1}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
            <div className='comment_text_field'>
                <ul>
                    <li>
                        <div className='header'>
                            <Avatar image={MocBackground.src}></Avatar>
                            نادیه نجم آبادی
                        </div>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                            استفاده قرار گیرد.
                        </p>
                    </li>
                    <li>
                        <div className='header'>
                            <Avatar image={MocBackground.src}></Avatar>
                            نادیه نجم آبادی
                        </div>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                            استفاده قرار گیرد.
                        </p>
                    </li>
                    <li>
                        <div className='header'>
                            <Avatar image={MocBackground.src}></Avatar>
                            نادیه نجم آبادی
                        </div>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                            استفاده قرار گیرد.
                        </p>
                    </li>
                    <li>
                        <div className='header'>
                            <Avatar image={MocBackground.src}></Avatar>
                            نادیه نجم آبادی
                        </div>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                            استفاده قرار گیرد.
                        </p>
                    </li>
                </ul>
            </div>
        </CommentField>
    );
};

export default HotelComment;
