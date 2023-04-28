import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

// Component
import Input from '../form-group/input';
import Button from '../form-group/button';

// Assets
import { MainFieldMaw } from './reserve-box.style';
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

const ReserveBox = () => {
    const { t } = useTranslation('seach-header');
    const { locale } = useRouter();
    const [inputValue, setInputValue] = useState('');

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.name);
    };

    return (
        <MainFieldMaw lang={locale!} rtlLangs={rtlLangs}>
            <h1 className="title">ثبت رزرو</h1>
            <div className='group_field'>

                
                <div className='select_field w-100'>
                        <Image src={AvatarIcon} alt='' />
                        <Autocomplete
                            disablePortal
                            options={top100Films}
                            renderInput={({ inputProps, ...props }) => <TextField {...props} inputProps={{ ...inputProps, readOnly: true }} />}
                            defaultValue={{ label: 'نفرات بیشتر' }}
                        />
                    </div>
                <div className="container-select">
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
                            options={reserveTime}
                            renderInput={({ inputProps, ...props }) => <TextField {...props} inputProps={{ ...inputProps, readOnly: true }} />}
                            defaultValue={{ label: '11:30 عصر' }}
                        />
                    </div>
                </div>



            </div>
            <Button text='ثبت' extraClass='search_btn w-100' color='primary' />
        </MainFieldMaw>
    );
};
const top100Films = [{ label: '1 نفر' }, { label: '2 نفر' }, { label: '3 نفر' }, { label: '4 نفر' }, { label: '5 نفر' }];
const reserveTime = [
    { label: '13:00' },
    { label: '14:00' },
    { label: '15:00' },
    { label: '16:00' },
    { label: '17:00' }
];
export default ReserveBox;