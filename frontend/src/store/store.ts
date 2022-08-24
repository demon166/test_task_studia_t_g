import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { ArticlesSlice } from 'store';

export const store = configureStore({
  reducer: {
    articles: ArticlesSlice.articlesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
