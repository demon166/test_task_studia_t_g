import { createAsyncThunk, miniSerializeError } from '@reduxjs/toolkit';
import { ArticlesService } from './service';
import { ArticlesServiceDemo } from './service_demo';
import { toast } from 'react-toastify';
import { IArticleCreateAndUpdateAsyncThunk, IGetAndDeleteArticleRequest } from './entities';
import { ModeSlice } from 'store';

const servicesList = {
  default: ArticlesService,
  demo: ArticlesServiceDemo,
};

/**
 * Получение всех статей
 */

export const getArticlesAsync = createAsyncThunk(
  'articlesSlice/getArticlesAsync',
  async (_: void, { rejectWithValue, getState }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.getArticles();
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      return rejectWithValue(error);
    }
  },
);

/**
 * Получение статьи
 */

export const getArticleAsync = createAsyncThunk(
  'articlesSlice/getArticleAsync',
  async ({ id }: IGetAndDeleteArticleRequest, { rejectWithValue, getState }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.getArticle({ id });
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      return rejectWithValue(error);
    }
  },
);

/**
 * Создание статьи
 */

export const createArticleAsync = createAsyncThunk(
  'articlesSlice/createArticleAsync',
  async ({ article, errorHandle, successHandle }: IArticleCreateAndUpdateAsyncThunk, {
    dispatch,
    rejectWithValue,
    getState,
  }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.createArticle(article);
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

/**
 * Обновление статьи
 */

export const updateArticleAsync = createAsyncThunk(
  'articlesSlice/updateArticleAsync',
  async ({ article, errorHandle, successHandle }: IArticleCreateAndUpdateAsyncThunk, {
    dispatch,
    rejectWithValue,
    getState,
  }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.updateArticle(article);
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

/**
 * Удаление статьи
 */

export const deleteArticleAsync = createAsyncThunk(
  'articlesSlice/deleteArticleAsync',
  async ({ id }: IGetAndDeleteArticleRequest, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.deleteArticle({ id });
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
