import { Service } from "@/service/request.js";

/**
 * 获取已分发平台信息
 */
export function getStaffPlat(params) {
    return Service({
        url:`/data_Manipulation/show_staff_plat/`,
        method:'get',
        params:params
    })
}
/**
 * 获取项目下对应员工
 */
export function getShowStaff(params) {
    return Service({
        url:`/data_Manipulation/show_staff/`,
        method:'get',
        params:params
    })
}
/**
 * 操作员工对应平台 
 * 新增和删除
 */
export function doShowStaff(params) {
    return Service({
        url:`/data_Manipulation/save_staff_role/`,
        method:'post',
        data:params
    })
}
