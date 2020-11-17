import { Service } from "@/service/request.js";
/**
 * 
 * 登录
 */
export function userLogin(param){
    return Service({
        url:'/chuangyouHome/login_logic/',
        method:'post',
        data:param
    })
}