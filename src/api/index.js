import { httpPost, httpPath } from './requestService';

export default { 
    // 用户管理
    loginUser: httpPost('/api/home/login'),
    // 通讯录
    getStaffPhone: httpPost('/api/home/phone'),
    // 设备管理
    getDeviceList: httpPath('/device/list'),
    // getDeviceInfo: httpPath('/device/info'),
    getDeviceInfo: httpPost('/api/home/info'),
    // 隐患管理
    // getHiddenDangerList: httpPath('/hiddenDanger/list'),
    // addHiddenDanger: httpPost('/hiddenDanger/add'),
    addHiddenDanger: httpPost('/api/home/dangerup'),
    getHiddenDangerInfo: httpPath('/hiddenDanger/info'),
    handleHiddenDanger: httpPost('/hiddenDanger/startDisposal'),
    updateHiddenDangerInfo: httpPath('/hiddenDanger/disposal'),

    getHiddenDangerList: httpPost('/api/home/dangermanage'),    //隐患记录
    getHiddenDangerDetails: httpPost('/api/home/dangerinfo'),   //隐患详情
    upHiddenDanger: httpPost('/api/home/dangerup', 'multipart/form-data'),             //隐患上报
    updateHiddenDanger: httpPost('/api/home/dangerupdate'),         //隐患整改
    // 检修管理
    getOverhaulList: httpPath('/overhaul/list'),
    getOverhaulInfo: httpPath('/overhaul/info'),
    // 外协人员
    getCooperatorList: httpPost('/api/home/usermanage'),
    getCooperatorInfo: httpPost('/api/home/userinfo'),
    getCooperatorInfoDetails: httpPost('/api/home/userexamine'),     //获取外协人员详细信息

    // 获取所有部门
    getAllDepartmentList: httpPost('/api/home/alldepartment'),

    // 设备扫码
    getDeviceScan: httpPath('/api/home/scan'),

    // 验证身份证
    getIdCard: httpPost('/api/home/idlogin'),

    // 获取网格接口
    getGradeList: httpPost('/api/home/gradeList')
}