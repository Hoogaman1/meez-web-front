import Image from 'next/image';
import Link from 'next/link';

// Assets
import { MainField, ItemImage } from './index.style';
import StarIcon from '../../../../assets/images/icons/star.svg';
import BookMark from '../../../../assets/images/icons/bookmark.svg';
import MocImage from '../../../../assets/images/card-slider-moc/1.jpg';

// Component
import Button from '@/component/form-group/button';

const UserHistory = () => {
    return (
        <MainField>
            <h3>تاریخچه رزرو</h3>
            <ol>
                <li>
                    <div className='left_field'>
                        <Link href='/'>
                            <ItemImage background={MocImage.src}></ItemImage>
                        </Link>
                        <div className='content'>
                            <h4>ارکیده میدان ارژانتین</h4>
                            <p className='remove_item'>
                                <Image src={BookMark} alt='' />
                                حذف از لیست علاقه مندی ها
                            </p>
                            <div className='rate'>
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                            </div>
                            <div className='tag'>
                                <small>رستوران</small>
                                <span></span>
                                <small>کافه</small>
                                <span></span>
                                <small>سنتی</small>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Button text='رزرو مجدد' />
                    </Link>
                </li>
                <li>
                    <div className='left_field'>
                        <Link href='/'>
                            <ItemImage background={MocImage.src}></ItemImage>
                        </Link>
                        <div className='content'>
                            <h4>ارکیده میدان ارژانتین</h4>
                            <p className='remove_item'>
                                <Image src={BookMark} alt='' />
                                حذف از لیست علاقه مندی ها
                            </p>
                            <div className='rate'>
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                            </div>
                            <div className='tag'>
                                <small>رستوران</small>
                                <span></span>
                                <small>کافه</small>
                                <span></span>
                                <small>سنتی</small>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Button text='رزرو مجدد' />
                    </Link>
                </li>
                <li>
                    <div className='left_field'>
                        <Link href='/'>
                            <ItemImage background={MocImage.src}></ItemImage>
                        </Link>
                        <div className='content'>
                            <h4>ارکیده میدان ارژانتین</h4>
                            <p className='remove_item'>
                                <Image src={BookMark} alt='' />
                                حذف از لیست علاقه مندی ها
                            </p>
                            <div className='rate'>
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                            </div>
                            <div className='tag'>
                                <small>رستوران</small>
                                <span></span>
                                <small>کافه</small>
                                <span></span>
                                <small>سنتی</small>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Button text='رزرو مجدد' />
                    </Link>
                </li>
                <li>
                    <div className='left_field'>
                        <Link href='/'>
                            <ItemImage background={MocImage.src}></ItemImage>
                        </Link>
                        <div className='content'>
                            <h4>ارکیده میدان ارژانتین</h4>
                            <p className='remove_item'>
                                <Image src={BookMark} alt='' />
                                حذف از لیست علاقه مندی ها
                            </p>
                            <div className='rate'>
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                            </div>
                            <div className='tag'>
                                <small>رستوران</small>
                                <span></span>
                                <small>کافه</small>
                                <span></span>
                                <small>سنتی</small>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Button text='رزرو مجدد' />
                    </Link>
                </li>
                <li>
                    <div className='left_field'>
                        <Link href='/'>
                            <ItemImage background={MocImage.src}></ItemImage>
                        </Link>
                        <div className='content'>
                            <h4>ارکیده میدان ارژانتین</h4>
                            <p className='remove_item'>
                                <Image src={BookMark} alt='' />
                                حذف از لیست علاقه مندی ها
                            </p>
                            <div className='rate'>
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                            </div>
                            <div className='tag'>
                                <small>رستوران</small>
                                <span></span>
                                <small>کافه</small>
                                <span></span>
                                <small>سنتی</small>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Button text='رزرو مجدد' />
                    </Link>
                </li>
                <li>
                    <div className='left_field'>
                        <Link href='/'>
                            <ItemImage background={MocImage.src}></ItemImage>
                        </Link>
                        <div className='content'>
                            <h4>ارکیده میدان ارژانتین</h4>
                            <p className='remove_item'>
                                <Image src={BookMark} alt='' />
                                حذف از لیست علاقه مندی ها
                            </p>
                            <div className='rate'>
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                                <Image src={StarIcon} alt='' />
                            </div>
                            <div className='tag'>
                                <small>رستوران</small>
                                <span></span>
                                <small>کافه</small>
                                <span></span>
                                <small>سنتی</small>
                            </div>
                        </div>
                    </div>
                    <Link href='/'>
                        <Button text='رزرو مجدد' />
                    </Link>
                </li>
            </ol>
        </MainField>
    );
};

export default UserHistory;
