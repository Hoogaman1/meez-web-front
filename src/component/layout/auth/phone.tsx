/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authModalStatusHandler } from '../../../state-manager/reducer/utils';
import { useTranslation } from 'next-i18next';
import { RootState } from '@/state-manager/store';

// Assets
import { PhoneField } from './modal.style';

// MUI
import Dialog from '@mui/material/Dialog';
import { Autocomplete, Box, TextField } from '@mui/material';

// Component
import Button from '@/component/form-group/button';
import Input from '@/component/form-group/input';
import OTPModal from './otp';

// Tools
import { rtlLangs } from '../../../utils/constants';
import { useRouter } from 'next/router';
import { countries } from '@/utils/countries';

//  API
import { OTP } from '@/api-request/auth';

// Types
interface inputValueTypes {
    phoneCode: string;
    phoneNumber: string;
    countryCode: string;
}

const PhoneModal = () => {
    const { locale } = useRouter();
    const { t } = useTranslation('auth');
    const dispatch = useDispatch();
    const LoginModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);
    const [varifyModalStatus, setVerifyModalStatus] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<inputValueTypes>({
        phoneCode: '',
        phoneNumber: '',
        countryCode: ''
    });

    const closeModalHandler = () => {
        dispatch(
            authModalStatusHandler({
                ...LoginModalStatus,
                status: false
            })
        );
    };

    const submitHandler = () => {
        const phoneNumber = inputValue.phoneCode.replace('+', '') + inputValue.phoneNumber;
        setLoading(true);
        OTP(phoneNumber)
            .then(() => {
                closeModalHandler();
                setVerifyModalStatus(true);
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Dialog open={LoginModalStatus.status} keepMounted onClose={closeModalHandler} fullWidth={true} scroll='body' maxWidth='xs'>
                <PhoneField lang={locale!} rtlLangs={rtlLangs}>
                    <h3>{t('Enter your phone number')}</h3>
                    <p>{t('You will receive a text message to verify your account. Message & data rates may apply.')}</p>

                    <div className='input_field'>
                        <img
                            className='selected_image'
                            src={`https://flagcdn.com/w20/${inputValue.countryCode.toLowerCase()}.png`}
                            alt=''
                        />
                        <Autocomplete
                            sx={{ width: 200 }}
                            options={countries}
                            autoHighlight
                            disablePortal
                            disableClearable
                            onChange={(e, value) => {
                                setInputValue({
                                    ...inputValue,
                                    phoneCode: value.phone,
                                    countryCode: value.code
                                });
                            }}
                            getOptionLabel={option => `+${option.phone}`}
                            renderOption={(props, option) => (
                                <Box component='li' sx={{ '& > img': { mr: 1, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading='lazy'
                                        width='20'
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        alt=''
                                    />
                                    <span style={{ fontSize: '0.8rem' }}>
                                        {option.label} - +{option.phone}
                                    </span>
                                </Box>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    inputProps={{
                                        ...params.inputProps
                                    }}
                                />
                            )}
                        />
                        <Input
                            handler={e =>
                                setInputValue({
                                    ...inputValue,
                                    phoneNumber: e.target.value
                                })
                            }
                            name='phone'
                            value={inputValue.phoneNumber}
                            placeHolder='شماره موبایل'
                        />
                    </div>
                    <div className='modal_footer'>
                        <Button text={t('Continue')} handler={submitHandler} loading={loading} />
                    </div>
                </PhoneField>
            </Dialog>
            <OTPModal
                status={varifyModalStatus}
                statusHandler={setVerifyModalStatus}
                phoneNumber={inputValue.phoneCode.replace('+', '') + inputValue.phoneNumber}
            />
        </>
    );
};

export default PhoneModal;
