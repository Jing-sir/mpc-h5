export const NUMBER_MAX = Number.MAX_SAFE_INTEGER; // 安全区域内的最大数值[Java = Integer.MAX_VALUE = 2 ** 31 - 1]
export const NUMBER_MIN = Number.MIN_SAFE_INTEGER; // 安全区域内的最小数值
export const PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{6,15}$/; // 6-15位数字 + 大小写字母密码
export const SIX_NUMBER = /^[0-9]{6}$/; // 6为正实数密码 / code
export const THOUSANDS_REGULAR = /\B(?=(\d{3})+(?!\d))/g; // 千分符
export const NUMBER = /^(1|[1-9][0-9]*)$/; // 只能输入1和非零开头的数字
export const EMAIL = /^[\S]+@[\w|\d]+\.[\w|\d]+$/; // 邮箱
export const VERSION_NUMBER_RULES =
    /^([1-9]\d|[1-9])(\.([1-9]\d|\d)){2}(\+([a-zA-z0-9]*[0-9]+[a-zA-z0-9]*))$/; // 版本号正则

interface PagingType {
    pageNo: number
    pageSize: number
    pageTotal: number
}

export const PagingDefaultConf: PagingType = {
    // paging 默认数据
    pageNo: 1,
    pageSize: 10,
    pageTotal: 0,
};
