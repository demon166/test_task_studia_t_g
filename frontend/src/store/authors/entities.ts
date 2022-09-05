import { RequestStatuses } from 'shared';

export interface AuthorReducer {
  authors: IAuthor[] | null,
  status: RequestStatuses,
  error: Error | null,
}

export interface IAuthor {
  id: string,
  full_name: string,
}

export interface IAuthorCreateAndUpdate {
  id?: string,
  full_name: string,
}

export interface IAuthorResponse {
  data: IAuthor[],
}

export interface IDeleteAuthorRequest {
  id: number | string;
}

export interface IAuthorCRUDResponse {
  author: IAuthor,
  message: string,
}
