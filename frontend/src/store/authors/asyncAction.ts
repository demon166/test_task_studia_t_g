import { createAsyncThunk, miniSerializeError } from '@reduxjs/toolkit';
import { AuthorsService } from './service';
import { AuthorsServiceDemo } from './service_demo';
import { IAuthorCreateAndUpdate, IDeleteAuthorRequest } from './entities';
import { ModeSlice } from 'store';
import { toast } from 'react-toastify';

interface IAuthorCreateAndUpdateAsyncThunk {
  author: IAuthorCreateAndUpdate,
  successHandle?: () => void,
  errorHandle?: () => void,
}

const servicesList = {
  default: AuthorsService,
  demo: AuthorsServiceDemo,
};

export const getAuthorsAsync = createAsyncThunk(
  'AuthorsSlice/getAuthorsAsync',
  async (_: void, { rejectWithValue, getState }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.getAuthors();
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      return rejectWithValue(error);
    }
  },
);

export const deleteAuthorAsync = createAsyncThunk(
  'AuthorsSlice/deleteAuthorAsync',
  async ({ id }: IDeleteAuthorRequest, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.deleteAuthor({ id });
      dispatch(getAuthorsAsync());
      toast.success(`Автор ${data.author.full_name.slice(0, 25)} успешно удален.`);
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      toast.error('Не удалось удалить автора');
      return rejectWithValue(error);
    }
  },
);

export const createAuthorAsync = createAsyncThunk(
  'AuthorsSlice/createAuthorAsync',
  async ({ author, errorHandle, successHandle }: IAuthorCreateAndUpdateAsyncThunk, {
    dispatch,
    rejectWithValue,
    getState,
  }) => {
    try {
      const state = getState() as any;
      const { mode }: { mode: ModeSlice.TService } = state.mode;
      const service = servicesList[mode];
      const { data } = await service.createAuthor(author);
      dispatch(getAuthorsAsync());
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
