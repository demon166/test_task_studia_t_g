import { api } from 'shared';
import { IArticleCreateAndUpdate, IArticleCRUDResponse, IArticleResponse, IDeleteArticleRequest } from './entities';

export const ArticlesService = {
  getArticles: () => api.get<IArticleResponse>('/articles'),
  deleteArticle: ({id}: IDeleteArticleRequest) => api.delete<IArticleCRUDResponse>(`/articles/${id}`),
  createArticle: (article: IArticleCreateAndUpdate) => api.post<IArticleCRUDResponse>('/articles', article),
  updateArticle: (article: IArticleCreateAndUpdate) => api.post<IArticleCRUDResponse>('/articles', article),
}
