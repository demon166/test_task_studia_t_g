import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ArticlesSlice, AuthorSlice, UISlice } from 'store';

export const store = configureStore({
  reducer: {
    articles: ArticlesSlice.articlesReducer,
    authors: AuthorSlice.authorsReducer,
    ui: UISlice.uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown,
Action<string>>;
