export { authorsReducer } from './authorSlice';
export type { IAuthor, IAuthorResponse, AuthorReducer } from './entities';
export { getAuthors, getError, getStatus, getAuthorsForSelect } from './selectors';
export { getAuthorsAsync, deleteAuthorAsync, createAuthorAsync } from './asyncAction';
