import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

// Component
import Input from '../form-group/input';
import Button from '../form-group/button';

// Assets
import { MainField } from './search-form.style';
import SearchIcon from '../../assets/images/icons/search.svg';
import AvatarIcon from '../../assets/images/icons/avatar.svg';
import ClockIcon from '../../assets/images/icons/clock.svg';

// MUI
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

// Utils
import { rtlLangs } from '../../utils/constants';

const SearchForm = () => {
    const { t } = useTranslation('seach-header');
    const { locale } = useRouter();
    const [inputValue, setInputValue] = useState('');

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.name);
    };

    return (
        <MainField lang={locale!} rtlLangs={rtlLangs}>
            <div className='group_field'>
                <div className='date_picker'>
                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                        <DatePicker defaultValue={new Date()} />
                    </LocalizationProvider>
                </div>
                <span className='seprator'></span>
                <div className='select_field'>
                    <Image src={ClockIcon} alt='' />
                    <Autocomplete
                        disablePortal
                        options={top100Films}
                        renderInput={({ inputProps, ...props }) => <TextField {...props} inputProps={{ ...inputProps, readOnly: true }} />}
                        defaultValue={{ label: '11:30 عصر' }}
                    />
                </div>
                <span className='seprator'></span>
                <div className='select_field'>
                    <Image src={AvatarIcon} alt='' />
                    <Autocomplete
                        disablePortal
                        options={top100Films}
                        renderInput={({ inputProps, ...props }) => <TextField {...props} inputProps={{ ...inputProps, readOnly: true }} />}
                        defaultValue={{ label: 'نفرات بیشتر' }}
                    />
                </div>
            </div>
            <div className='search_input_field'>
                <Image src={SearchIcon} alt='' />
                <Input handler={inputValueHandler} name='searchVal' value={inputValue} placeHolder={t('لوکیشن ، رستوران ، ...')!} />
            </div>
            <Button text='جستجو' extraClass='search_btn' color='primary' />
        </MainField>
    );
};

export default SearchForm;

const top100Films = [{ label: '1 نفر' }, { label: '2 نفر' }, { label: '3 نفر' }, { label: '4 نفر' }, { label: '5 نفر' }];
