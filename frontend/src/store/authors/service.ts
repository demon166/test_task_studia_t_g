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
  createAuthor: (Author: IAuthorCreateAndUpdate) => api.post<IAuthorCRUDResponse>('/authors', Author),
  updateAuthor: (Author: IAuthorCreateAndUpdate) => api.post<IAuthorCRUDResponse>('/authors', Author),
};
