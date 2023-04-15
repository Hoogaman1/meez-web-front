/* eslint-disable quotes */
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Assets
import { OTPField } from './modal.style';

// MUI
import { Dialog } from '@mui/material';

// Component
import Button from '@/component/form-group/button';
import Input from '@/component/form-group/input';

// Tools
import { rtlLangs } from '../../../utils/constants';

const OTPModal = ({ status, statusHandler }: { status: boolean; statusHandler: Function }) => {
    const { locale } = useRouter();
    const { t } = useTranslation('auth');
    const [loading, setLoading] = useState<boolean>(false);

    const submitHandler = () => {};

    return (
        <>
            <Dialog open={true} keepMounted onClose={() => statusHandler(false)} fullWidth={true} scroll='body' maxWidth='xs'>
                <OTPField lang={locale!} rtlLangs={rtlLangs}>
                    <h3>{t("Verify it's you")}</h3>
                    <p>ما یک کد به شماره موبایل شما ارسال کردیم ، برای ادامه کد را وارد کنید .</p>
                    <Input handler={() => {}} name='phone' value={''} placeHolder='کد تایید' />
                    <div className='modal_footer'>
                        <Button text={t('Continue')} handler={submitHandler} loading={loading} />
                    </div>
                </OTPField>
            </Dialog>
        </>
    );
};

export default OTPModal;
