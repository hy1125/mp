import { showToast } from '@/plugins';
import apiconf from './apiconf.js';
import { resolve } from 'path';
import { rejects } from 'assert';

const formatParams = (params) => {
    let queryString = [];
    for (let key in params) {
        queryString.push(`${key}=${params[key]}`);
    }
    return queryString.join('&');
}

const Http = (path, method, domain, bHandleError) => {
    return (data, params, type) => {
        let url = `${(domain || apiconf.domain)}${path}`;
        if (params) {
            const queryString = formatParams(params);
            url = `${url}?${queryString}`;
        }
        return new Promise((resolve, reject) => {
            const token = wx.getStorageSync('laravel_session');
            var expiration=wx.getStorageSync("index_data_expiration");//拿到过期时间
            var timestamp=Date.parse(new Date());//拿到现在时间
            //进行时间比较
            if(expiration<timestamp){//过期了，清空缓存，跳转到登录
              console.log("缓存已过期");
              wx.clearStorageSync();//清空缓存
              wx.redirectTo({
                url: '/pages/login/main',
              });//跳转到登录
              return;
            }
            wx.request({
                url: url,
                method: method,
                data: method === 'POST' ? data : null,
                header: {
                    'cookie': token || '',
                    // 'content-type': 'application/x-www-form-urlencoded'
                    'content-type': type || 'application/x-www-form-urlencoded'
                },
                success(response) {
                    console.log("......",path)
                    let res = response.data;
                    if (res.status != 1) {
                        // showToast({ title: `${res.error}`, icon: 'none' });
                        showToast({ title: `接口异常`, icon: 'none' });
                        // if (res.code == 5) {
                        //     showToast({ title: '用户会话状态已过期，请重新登录', icon: 'none' });
                        //     wx.redirectTo({
                        //         url: '/pages/login/main'
                        //     })
                        //     return false;
                        // } else {
                        //     showToast({ title: `错误代码: ${res.code}, ${res.msg}`, icon: 'none' });
                        // }
                        return false
                    }
                    if(path == "/api/home/login") {
                        resolve(response);
                    }else {
                        resolve(res);
                    }
                },
                fail(error) {
                    showToast({ title: '请求数据超时，请检查网络连接是否正常', icon: 'none' });
                    reject(error);
                }
            });
        });
    }
}

export function httpPost(path, domain, bHandleError) {
    return Http(path, 'POST', domain, bHandleError)
}

export function httpPath(path, domain) {
    return (paths) => {
        return new Promise((resolve, reject) => {
            const token = wx.getStorageSync('token');
            wx.request({
                url: `${domain || apiconf.domain}${path}${paths || ''}`,
                method: 'GET',
                header: {
                    'MKOTEAM-ACCESS-TOKEN': token || ''
                },
                success(response) {
                    let res = response.data;
                    if (res.status != 1) {
                        if (res.code == 5) {
                            showToast({ title: '用户会话状态已过期，请重新登录', icon: 'none' });
                            wx.redirectTo({
                                url: '/pages/login/main'
                            })
                            return false;
                        } else {
                            showToast({ title: `错误代码: ${res.code}, ${res.msg}`, icon: 'none' });
                        }
                        return false
                    }
                    resolve(res);
                },
                fail(error) {
                    showToast({ title: '请求数据超时，请检查网络连接是否正常', icon: 'none' });
                    reject(error);
                }
            });
        });
    }
}