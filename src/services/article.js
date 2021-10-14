import { get, post, put } from '../utils/request'

/**
 * 获取文章列表
 * @param page
 * @returns {Promise<AxiosResponse<never>>}
 */
export function articlePageListApi(pageNum = 1, pageSize = 10) {
  return get('/api/article/getPageList', { pageNum, pageSize });
}

export function getArticleContent(articleId) {
  return get('/api/article/getArticle', { articleId });
}

/**
 * 根据文章编号删除文章
 * @param {*} user 
 * @returns 
 */
export function delOneApi(id) {
  return post('/api/article/delete', id);
}

export function createArticleApi(data) {
  return post('/api/create', data);
}

export function modifyArticleApi(id, data) {
  return put(`http://localhost:8080/${id}`, data);
}

// export function deleteArticleApi(id, data) {
//   return del(`http://localhost:8080/${id}`);
// }