import axios from './index';

export const getUserInfo = ({ userid }) => {
    return axios.request({
        url: '/api/index/article',
        method: 'post',
        data: {
            userid
        }
    })
}