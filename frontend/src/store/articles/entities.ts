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

export interface IArticleCreateAndUpdate{
  title: string,
  text: string,
  author_id: string,
}

export interface IArticleResponse {
  data: IArticle[],
}


export interface IDeleteArticleRequest{
  id: number | string;
}

export interface IArticleCRUDResponse {
  article: IArticle,
  message: string,
}

