import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const getArticlesSliceStore = (state: RootState) => state.articles;

export const getArticles = createSelector(getArticlesSliceStore, ({articles}) => articles);
export const getError = createSelector(getArticlesSliceStore, ({error}) => error);
export const getStatus = createSelector(getArticlesSliceStore, ({status}) => status);
