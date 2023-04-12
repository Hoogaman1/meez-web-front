import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

// MUI
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

// Assets
import { MainField } from './search-header.style';
import SearchIcon from '../../assets/images/icons/search.svg';
import AvatarIcon from '../../assets/images/icons/avatar.svg';
import ClockIcon from '../../assets/images/icons/clock.svg';

// Component
import Input from '../form-group/input';
import Button from '../form-group/button';
import { useRouter } from 'next/router';

// Utils
import { rtlLangs } from '../../utils/constants';
import Link from 'next/link';

// Types
interface ComponentTypes {
    background?: string;
    smallText?: string;
}

const SearchHeader = ({ background, smallText }: ComponentTypes) => {
    const { locale } = useRouter();
    const { t } = useTranslation('seach-header');
    const [inputValue, setInputValue] = useState('');

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.name);
    };

    return (
        <MainField background={background} heightSize={smallText ? 'logn' : 'short'} lang={locale!} rtlLangs={rtlLangs}>
            {smallText && (
                <small>
                    {smallText} {t('Restaurants')}
                </small>
            )}
            <h3>{smallText ? t('Find your table for any occasion') : t('Make a free reservation')}</h3>
            <div className='search_box'>
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
                            renderInput={({ inputProps, ...props }) => (
                                <TextField {...props} inputProps={{ ...inputProps, readOnly: true }} />
                            )}
                            defaultValue={{ label: '11:30 عصر' }}
                        />
                    </div>
                    <span className='seprator'></span>
                    <div className='select_field'>
                        <Image src={AvatarIcon} alt='' />
                        <Autocomplete
                            disablePortal
                            options={top100Films}
                            renderInput={({ inputProps, ...props }) => (
                                <TextField {...props} inputProps={{ ...inputProps, readOnly: true }} />
                            )}
                            defaultValue={{ label: 'نفرات بیشتر' }}
                        />
                    </div>
                </div>
                <div className='search_input_field'>
                    <Image src={SearchIcon} alt='' />
                    <Input
                        handler={inputValueHandler}
                        name='searchVal'
                        value={inputValue}
                        placeHolder={t('Please input a Location, Restaurant or Cuisine')!}
                    />
                </div>
                <Button text={t('Lets go')} extraClass='search_btn' color='secondary' />
            </div>
            <Link href='/fa' locale='fa'>
                fa
            </Link>
            <Link href='/en' locale='en'>
                en
            </Link>
        </MainField>
    );
};

export default SearchHeader;

const top100Films = [{ label: '1 نفر' }, { label: '2 نفر' }, { label: '3 نفر' }, { label: '4 نفر' }, { label: '5 نفر' }];
