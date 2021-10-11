import { get, post, put, del } from '../utils/request'

const baseUrl = "http://localhost:8080/"

/**
 * 獲取文章列表
 * @param page
 * @returns {Promise<AxiosResponse<never>>}
 */
export function articlesListApi(page = 1) {
  return get(baseUrl, { page });
}

export function createArticleApi(data) {
  return post(baseUrl, data);
}

export function modifyArticleApi(id, data) {
  return put(`http://localhost:8080/${id}`, data);
}

export function deleteArticleApi(id, data) {
  return del(`http://localhost:8080/${id}`);
}