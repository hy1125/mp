
import moment from 'moment';

export const dateFormat = (value, format) => {
    if (!value) return "";
    if (value == null) return "";
    let res = moment(value).format(format || "YYYY-MM-DD HH:mm");
    return res == 'Invalid date' ? '' : res;
}

export const yhStatusFilter = (value) => {
    const status = ['待处理', '处理中', '已处理', '已验收']; // 0：待处理，1：处理中，2：已处理 3：已验收
    return status[value];
}

export const qualificationFilter = (value) => {
    if(typeof value === 'string') {
        value = parseInt(value);
    }
    const qualification = ['其他', '焊工', '架子工', '起重工', '叉车工', '其他']; 
    return qualification[value];
}

export const deviceStatusFilter = (value) => {
    const status = ['异常', '运行中']; 
    return status[value];
}