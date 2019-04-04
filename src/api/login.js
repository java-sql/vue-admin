import request from '@/utils/request'

export function login(username, password) {
    return request({
        url: '/api/base/login',
        method: 'post',
        params: {
            identifier: username,
            credential: password
        }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
