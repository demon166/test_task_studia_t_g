import { createAsyncThunk, miniSerializeError } from '@reduxjs/toolkit';
import { ArticlesService } from './service';
import { ArticlesSlice } from 'store';
import { toast } from 'react-toastify';

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
  },
);

export const deleteArticleAsync = createAsyncThunk(
  'articlesSlice/deleteArticleAsync',
  async ({ id }: ArticlesSlice.IDeleteArticleRequest, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await ArticlesService.deleteArticle({ id });
      dispatch(getArticlesAsync());
      toast.success(`Статья ${data.article.title.slice(0, 25)} успешно удалена.`);
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      toast.error('Не удалось удалить статью');
      return rejectWithValue(error);
    }
  },
);

interface IArticleCreateAndUpdateAsyncThunk {
  article: ArticlesSlice.IArticleCreateAndUpdate,
  successHandle?: () => void,
  errorHandle?: () => void,
}

export const createArticleAsync = createAsyncThunk(
  'articlesSlice/createArticleAsync',
  async ({ article, errorHandle, successHandle }: IArticleCreateAndUpdateAsyncThunk, {
    dispatch,
    rejectWithValue,
  }) => {
    try {
      const { data } = await ArticlesService.createArticle(article);
      dispatch(getArticlesAsync());
      if (successHandle) {
        successHandle();
      }
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      if (errorHandle) {
        errorHandle();
      }
      return rejectWithValue(error);
    }
  },
);
