import { createAsyncThunk, miniSerializeError } from '@reduxjs/toolkit';
import { AuthorsService } from './service';
import { IAuthorCreateAndUpdate, IDeleteAuthorRequest } from './entities';
import { toast } from 'react-toastify';

interface IAuthorCreateAndUpdateAsyncThunk {
  author: IAuthorCreateAndUpdate,
  successHandle?: () => void,
  errorHandle?: () => void,
}

export const getAuthorsAsync = createAsyncThunk(
  'AuthorsSlice/getAuthorsAsync',
  async (_: void, { rejectWithValue }) => {
    try {
      const { data } = await AuthorsService.getAuthors();
      return data;
    } catch (rejectedValueOrSerializedError) {
      const error = miniSerializeError(rejectedValueOrSerializedError);
      return rejectWithValue(error);
    }
  },
);

export const deleteAuthorAsync = createAsyncThunk(
  'AuthorsSlice/deleteAuthorAsync',
  async ({ id }: IDeleteAuthorRequest, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await AuthorsService.deleteAuthor({ id });
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
  }) => {
    try {
      const { data } = await AuthorsService.createAuthor(author);
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
