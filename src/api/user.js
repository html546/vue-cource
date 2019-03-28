import axios from './index';

export const getUserInfo = ({ userid }) => {
    return axios.request({
        url: '/api/index/index',
        method: 'post',
        data: {
            userid
        }
    })
}