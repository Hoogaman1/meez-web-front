/* eslint-disable camelcase */
import RequestHandler from '../configs/axios';


export const getInfo = async (data: number) => {
    return RequestHandler.get(`/CLIENT/profile/${data}`).then(res => res.data);
};
