/*
 * @Description: 模块
 * @Author: pliybird
 * @LastEditors: pliybird
 * @Date: 2022-08-11 14:47:28
 * @LastEditTime: 2022-08-11 14:48:09
 */
const http = uni.$u.http

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getCompetitorList = (data) => http.get('/list', data)