/* eslint-disable camelcase */
import RequestHandler from '../configs/axios';

interface RegisterType {
    email: string;
    name: string;
    surname: string;
    phone: string;
}

export const Register = async (data: RegisterType) => {
    return RequestHandler.post('/MASTER/phone/', data).then(res => res.data);
};

export const Login = async (phone: string, activate_code: string) => {
    return RequestHandler.post('/MASTER/activate/', { phone, activate_code }).then(res => res.data);
};

export const OTP = async (phone: string) => {
    return RequestHandler.post('/MASTER/phone/', { phone }).then(res => res);
};
