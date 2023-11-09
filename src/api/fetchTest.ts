import { AxiosInstance } from 'axios';

import http from '../plugins/http';

abstract class Api {
    protected api: AxiosInstance;

    constructor() {
        const baseUrl: string = String(process.env.VUE_APP_BASE_URL);
        this.api = http[baseUrl] || http.instance(baseUrl);
    }
    // protected abstract verifyParamsSchema<T>(params: object, schema: object): T | null;  // 如果需要中间件拦截(参数验证等服务)，可以使用Joi集成服务
}

class FetchTest extends Api {
    userLogin(params: { account: string, password: string, code: string }): Promise<any> { // 用户登录
        return this.api.post('/sys/manage/login', params);
    }
}
export default new FetchTest();
