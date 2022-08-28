import { AuthorReducer, IAuthorResponse } from './entities';
import { RequestStatuses } from 'shared';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAuthorsAsync } from './asyncAction';

const initialState: AuthorReducer = {
  authors: null,
  error: null,
  status: RequestStatuses.IDLE,
};

const authorSlice = createSlice({
  name: 'authorSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getAuthorsAsync.pending?.type]: (state: AuthorReducer) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getAuthorsAsync.fulfilled?.type]: (
      state: AuthorReducer, { payload: authors }: PayloadAction<IAuthorResponse>) => ({
      authors: authors.data,
      status: RequestStatuses.SUCCESS,
      error: null,
    }),
    [getAuthorsAsync.rejected?.type]: (
      state: AuthorReducer, { payload: error }: PayloadAction<Error>) => ({
      ...state,
      status: RequestStatuses.FAILURE,
      error,
    }),
  },
});

export const authorsReducer = authorSlice.reducer;
