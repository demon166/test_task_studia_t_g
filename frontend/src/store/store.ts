import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ArticlesSlice, AuthorSlice } from 'store';

export const store = configureStore({
  reducer: {
    articles: ArticlesSlice.articlesReducer,
    authors: AuthorSlice.authorsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown,
Action<string>>;
