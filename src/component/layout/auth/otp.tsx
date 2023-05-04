/* eslint-disable quotes */
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { redirect } from 'next/navigation';

// Assets
import { OTPField } from './modal.style';

// MUI
import { Dialog } from '@mui/material';

// Component
import Button from '@/component/form-group/button';
import Input from '@/component/form-group/input';
import UserInfoModal from './user-info';

// Tools
import { rtlLangs } from '../../../utils/constants';

// API
import { Login } from '@/api-request/auth';


//authentication
import useAuth from '../../../hooks/useAuth';


const OTPModal = ({ status, statusHandler, phoneNumber }: { status: boolean; statusHandler: Function; phoneNumber: string }) => {


    const { setAuth } : any = useAuth();

    const { locale } = useRouter();
    const { t } = useTranslation('auth');
    const LoginModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);
    const [loading, setLoading] = useState<boolean>(false);
    const [OTPValue, setOTPValue] = useState<string>('');
    const [userInfoModalStatus, setUserInfoModalStatus] = useState<boolean>(false);

    const submitHandler = () => {
        setLoading(true);
        if (LoginModalStatus.type === 'register') {
            statusHandler(false);
            setUserInfoModalStatus(true);
        } else {
            Login(phoneNumber, OTPValue)
                .then((res) => {
                    // localStorage.setItem("accessToken",res.data.token);
                    const accessToken   =   res.data.token;
                    setAuth({ accessToken });
                })
                .catch(() => {})
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <>
            <Dialog open={status} keepMounted onClose={() => statusHandler(false)} fullWidth={true} scroll='body' maxWidth='xs'>
                <OTPField lang={locale!} rtlLangs={rtlLangs}>
                    <h3>احراز هویت</h3>
                    <p>ما یک کد به شماره موبایل شما ارسال کردیم ، برای ادامه کد را وارد کنی</p>
                    <Input handler={e => setOTPValue(e.target.value)} name='phone' value={OTPValue} placeHolder='کد تایید' />
                    <div className='modal_footer'>
                        <Button text={t('Continue')} handler={submitHandler} loading={loading} />
                    </div>
                </OTPField>
            </Dialog>
            <UserInfoModal status={userInfoModalStatus} statusHandler={setUserInfoModalStatus} phoneNumber={phoneNumber} />
        </>
    );
};

export default OTPModal;
