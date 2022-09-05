import { api } from 'shared';
import {
  IAuthorCreateAndUpdate,
  IAuthorCRUDResponse,
  IAuthorResponse,
  IDeleteAuthorRequest,
} from './entities';

export const AuthorsService = {
  getAuthors: () => api.get<IAuthorResponse>('/authors'),
  deleteAuthor: ({ id }: IDeleteAuthorRequest) => api.delete<IAuthorCRUDResponse>(`/authors/${id}`),
  createAuthor: (author: IAuthorCreateAndUpdate) => api.post<IAuthorCRUDResponse>('/authors', author),
  updateAuthor: (author: IAuthorCreateAndUpdate) => api.post<IAuthorCRUDResponse>('/authors', author),
};
