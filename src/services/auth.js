import { post } from '../utils/request'

/**
 * 用户登录
 * @param user 账号密码
 * @returns {Promise<AxiosResponse<*>>}
 */
export function loginApi(user) {
  return post('/api/login', user);
}