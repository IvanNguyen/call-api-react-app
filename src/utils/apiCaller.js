import axios from 'axios'
import * as Config from './../constants/Config'

export default function callApi(endpoint, method, body) {
    return axios({ // tham so phai la 1 Object // day la cach viet chung
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    }).catch(err => {
        console.log('error :', err);
    });

};