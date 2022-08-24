import { ArticleReducer, IArticleResponse } from './entities';
import { RequestStatuses } from 'shared';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getArticlesAsync } from 'store/articles/asyncAction';

const initialState: ArticleReducer = {
    articles: null,
    error: null,
    status: RequestStatuses.IDLE,
}

const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {},
    extraReducers: {
      [getArticlesAsync.pending?.type]: (state: ArticleReducer) => ({
        ...state,
        status: RequestStatuses.LOADING,
      }),
      [getArticlesAsync.fulfilled?.type]: (state: ArticleReducer,
                                       { payload: articles }: PayloadAction<IArticleResponse>) => ({
        articles: articles.data,
        status: RequestStatuses.SUCCESS,
        error: null,
      }),
      [getArticlesAsync.rejected?.type]: (state: ArticleReducer,
                                      { payload: error }: PayloadAction<Error>) => ({
        ...state,
        status: RequestStatuses.FAILURE,
        error,
      }),
    }
})

export const articlesReducer = articleSlice.reducer;
