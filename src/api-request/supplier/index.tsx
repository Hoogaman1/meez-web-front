/* eslint-disable camelcase */
import RequestHandler from '../../configs/axios';

export const SupplierSuggests = async () => {
    return RequestHandler.post('MASTER/list-supplier-must/').then(res => res.data);
};

export const SupplierNewests = async () => {
    return RequestHandler.post('MASTER/list-supplier-newest/').then(res => res.data);
};

export const SupplierFeatures = async () => {
    return RequestHandler.post('MASTER/list-supplier-feature/').then(res => res.data);
};

