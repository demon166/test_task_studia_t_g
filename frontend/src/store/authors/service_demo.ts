import { api } from 'shared';
import { v4 as uuidv4 } from 'uuid';
import {
  IAuthor,
  IAuthorCreateAndUpdate,
  IAuthorCRUDResponse,
  IAuthorResponse,
  IDeleteAuthorRequest,
} from './entities';

export const AuthorsServiceDemo = {
  getAuthors: () => {
    const authors = JSON.parse(localStorage.getItem('authors') || '{"data":[]}') as IAuthorResponse;
    return {
      data: authors,
    };
  },
  deleteAuthor: ({ id }: IDeleteAuthorRequest) => {
    const authors = JSON.parse(localStorage.getItem('authors') || '{"data":[]}') as IAuthorResponse;
    const authorDeleted: IAuthor = authors.data
      .splice(authors.data.findIndex((author) => author.id === id), 1)[0];
    localStorage.setItem('authors', JSON.stringify(authors));
    return {
      data: {
        author: authorDeleted,
        message: 'Автор успешно удален',
      },
    };
  },
  createAuthor: (author: IAuthorCreateAndUpdate) => {
    const authors = JSON.parse(localStorage.getItem('authors') || '{"data":[]}') as IAuthorResponse;
    const createdAuthor = {
      id: uuidv4(),
      full_name: author.full_name,
    };
    authors.data.push(createdAuthor);
    localStorage.setItem('authors', JSON.stringify(authors));
    return ({
      data: {
        author: createdAuthor,
        message: 'Автор успешно создана',
      },
    });
  },
  updateAuthor: (Author: IAuthorCreateAndUpdate) => api.post<IAuthorCRUDResponse>('/authors', Author),
};
