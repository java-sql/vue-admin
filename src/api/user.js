import request from '@/utils/request'

export function getUserAuth() {
    return request({
        url: '/api/base/user/auth',
        method: 'get'
    })
}
