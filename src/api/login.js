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

export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}
