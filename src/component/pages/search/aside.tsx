import { useRouter } from 'next/router';

// Assets
import { MainField } from './aside.style';

// Tools
import Tools from '../../../utils/tools';

// Component
import Button from '@/component/form-group/button';

const SearchAside = () => {
    const { locale } = useRouter();

    return (
        <MainField>
            <h4>مرتب سازی بر اساس</h4>
            <div className='filter_field'>
                <span>هتل جدید</span>
                <span>امتیاز کاربران</span>
                <span>بهترین قیمت</span>
                <span>ویژه</span>
            </div>
            <h4>مسافت</h4>
            <div className='filter_field'>
                <span>{Tools.numberLangChanger('10', locale!)}کیلومتر</span>
                <span>{Tools.numberLangChanger('20', locale!)}کیلومتر</span>
                <span>{Tools.numberLangChanger('30', locale!)}کیلومتر</span>
                <span>{Tools.numberLangChanger('40', locale!)}کیلومتر</span>
            </div>
            <h4>قیمت</h4>
            <div className='filter_field one_line'>
                <span>اقتصادی</span>
                <span>نرمال</span>
                <span>ویژه</span>
            </div>
            <h4>دسته بندی</h4>
            <div className='filter_field'>
                <span>ایتالیایی</span>
                <span>فست فود</span>
                <span>عربی</span>
                <span>ایرانی</span>
            </div>
            <div className='button_group'>
                <Button text='جستجو' />
                <Button text='پاک کردن' />
            </div>
        </MainField>
    );
};

export default SearchAside;
