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

import {userIDHandler} from '../../../state-manager/reducer/getUser'
import {useDispatch } from 'react-redux';


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

    const dispatch = useDispatch();

    function setCookie(name: string, value: string, days: number) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const submitHandler = () => {
        setLoading(true);
        Register(inputValue)
            .then((data) => {
                console.log(data)
                setCookie("token", data.data.token, 7);
                dispatch(userIDHandler(data.data.id));
            })
            .catch(() => { })
            .finally(() => {
                setLoading(false);
            });
        
        statusHandler(false);
    };

    const getInputValue = (e: any) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
            phone: phoneNumber
        });
    };

    return (
        <>
            <Dialog open={status} keepMounted onClose={() => statusHandler(false)} fullWidth={true} scroll='body' maxWidth='xs'>
                <UserInfoField lang={locale!} rtlLangs={rtlLangs}>
                    <h3>مشخصات خود را وارد کنید</h3>
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
