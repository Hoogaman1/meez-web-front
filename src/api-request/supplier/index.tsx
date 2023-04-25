/* eslint-disable camelcase */
import RequestHandler from '../../configs/axios';

export const Register = async () => {
    return RequestHandler.post('MASTER/list-supplier-must/').then(res => res.data);
};
