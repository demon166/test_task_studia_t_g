import { api } from 'shared';
import { IArticleDeleteResponse, IArticleResponse, IDeleteArticleRequest } from './entities';

export const ArticlesService = {
  getArticles: () => api.get<IArticleResponse>('/articles'),
  deleteArticle: ({id}: IDeleteArticleRequest) => api.delete<IArticleDeleteResponse>(`/articles/${id}`)
}
