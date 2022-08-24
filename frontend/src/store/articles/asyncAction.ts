import { createAsyncThunk, miniSerializeError } from '@reduxjs/toolkit';
import { ArticlesService } from './service';
import { IDeleteArticleRequest } from 'store/articles/entities';

export const getArticlesAsync = createAsyncThunk(
  'articlesSlice/getArticlesAsync',
  async (_: void, { rejectWithValue }) => {
    try {
      const { data } = await ArticlesService.getArticles();
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      return rejectWithValue(error);
    }
  }
)

export const deleteArticleAsync = createAsyncThunk(
  'articlesSlice/deleteArticleAsync',
  async ({ id }: IDeleteArticleRequest, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await ArticlesService.deleteArticle({ id });
      dispatch(getArticlesAsync());
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      return rejectWithValue(error);
    }
  }
)
