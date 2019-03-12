/*
与后台交互模块
*/
import ajax from './ajax'

/**
 * 获取地址信息
*/
export const reqAddress = geohash => ajax('/api/position/' + geohash)

/** * 
 * 获 取 msite页 面 食 品 分 类 列 表
*/ 
export const reqCategorys = () => ajax('/api/index_category')

/** 
* 获 取 msite商 铺 列 表 ( 根 据 经 纬 度 )
*/ 
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})

/** 
* 账 号 密 码 登 录 
*/ 
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', { name, pwd, captcha }, 'POST')

/** 
 * 获 取 短 信 验 证 码 
*/ 

export const reqSendCode = phone => ajax('/api/sendcode', {phone})

/** 
* 手 机 号 验 证 码 登 录 
*/ 
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/** 
* 获 取 用 户 信 息 ( 根 据 会 话 ) 
*/ 
export const reqUser = () => ajax('/api/userinfo')

/**
 * 请求登出
 */
export const reqLogout = () => ajax('/api/logout')
