/* eslint-disable quotes */
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Assets
import { UserInfoField } from './modal.style';

// MUI
import { Dialog } from '@mui/material';

// Component
import Button from '@/component/form-group/button';
import Input from '@/component/form-group/input';

// Tools
import { rtlLangs } from '../../../utils/constants';

// API
import { Register } from '@/api-request/auth';

// Types
interface ComponentType {
    status: boolean;
    statusHandler: Function;
    phoneNumber: string;
}

interface InputTypes {
    email: string;
    name: string;
    surname: string;
    phone: string;
}

const UserInfoModal = ({ status, statusHandler, phoneNumber }: ComponentType) => {
    const { locale } = useRouter();
    const { t } = useTranslation('auth');
    const [loading, setLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<InputTypes>({
        email: '',
        phone: phoneNumber,
        surname: '',
        name: ''
    });

    const submitHandler = () => {
        setLoading(true);
        Register(inputValue)
            .then(() => {})
            .catch(() => {})
            .finally(() => {
                setLoading(false);
            });
    };

    const getInputValue = (e: any) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Dialog open={status} keepMounted onClose={() => statusHandler(false)} fullWidth={true} scroll='body' maxWidth='xs'>
                <UserInfoField lang={locale!} rtlLangs={rtlLangs}>
                    <h3>{t("Verify it's you")}</h3>
                    <p>ما یک کد به شماره موبایل شما ارسال کردیم ، برای ادامه کد را وارد کنید .</p>
                    <Input handler={e => getInputValue(e)} name='email' value={inputValue.email} label='ایمیل' />
                    <Input handler={e => getInputValue(e)} name='name' value={inputValue.name} label='نام' />
                    <Input handler={e => getInputValue(e)} name='surname' value={inputValue.surname} label='نام خانوادگی' />
                    <div className='modal_footer'>
                        <Button text={t('Continue')} handler={submitHandler} loading={loading} />
                    </div>
                </UserInfoField>
            </Dialog>
        </>
    );
};

export default UserInfoModal;
