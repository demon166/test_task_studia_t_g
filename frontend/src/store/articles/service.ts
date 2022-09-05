import { api } from 'shared';
import {
  IArticleCreateAndUpdate,
  IArticleCRUDResponse,
  IArticleResponse,
  IGetAndDeleteArticleRequest,
} from './entities';

export const ArticlesService = {
  getArticles: () => api.get<IArticleResponse>('/articles'),
  getArticle: ({ id }: IGetAndDeleteArticleRequest) => api.get<IArticleResponse>(`/articles/${id}`),
  deleteArticle: ({ id }: IGetAndDeleteArticleRequest) => api.delete<IArticleCRUDResponse>(`/articles/${id}`),
  createArticle: (article: IArticleCreateAndUpdate) => api.post<IArticleCRUDResponse>('/articles', article),
  updateArticle: (article: IArticleCreateAndUpdate) => api.put<IArticleCRUDResponse>(`/articles/${article.id}`, article),
};
