import { RequestStatuses } from 'shared';

export interface ArticleReducer {
    articles: IArticle[] | null,
    status: RequestStatuses,
    error: Error | null,
}

export interface IArticle {
    id: number,
    title: string,
    text?: string,
    author: string,
}

export interface IArticleResponse {
  data: IArticle[],
}

export interface IDeleteArticleRequest{
  id: number | string;
}

export interface IArticleDeleteResponse {
  article: IArticle,
  message: string,
}
