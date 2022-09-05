import { RequestStatuses } from 'shared';
import { IAuthor } from '../authors';


export interface IArticle {
  id: string,
  title: string,
  text?: string,
  author: IAuthor,
}

export interface ArticleReducer {
  articles: IArticle[] | null,
  article: IArticle | null,
  status: RequestStatuses,
  error: Error | null,
}

export interface IArticleCreateAndUpdate {
  id?: string,
  title: string,
  text: string,
  author_id: string,
}

export interface IArticleResponse {
  data: IArticle[],
}

export interface IGetArticleResponse {
  data: IArticle;
}


export interface IGetAndDeleteArticleRequest {
  id: string;
}

export interface IArticleCRUDResponse {
  article: IArticle,
  message: string,
}

export interface IFormCreateAndUpdateArticle {
  title: string,
  text: string,
  author: string,
}

export interface IArticleCreateAndUpdateAsyncThunk {
  article: IArticleCreateAndUpdate,
  successHandle?: () => void,
  errorHandle?: () => void,
}

