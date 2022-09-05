import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ArticlesSlice, AuthorSlice, UISlice, ModeSlice } from 'store';

export const store = configureStore({
  reducer: {
    articles: ArticlesSlice.articlesReducer,
    authors: AuthorSlice.authorsReducer,
    ui: UISlice.uiReducer,
    mode: ModeSlice.modeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown,
Action<string>>;
