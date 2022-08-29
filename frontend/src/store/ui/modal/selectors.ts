import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { getBodyElement, getHeaderTitle } from './modalTypeConfiguration';

const getAuthorsSliceStore = (state: RootState) => state.ui;
const getUiModalStore = createSelector(getAuthorsSliceStore, ({ modal }) => modal);

export const getIsShow = createSelector(getUiModalStore, ({ isShow }) => isShow);
export const BodyElement = createSelector(getUiModalStore,
  ({ type }) => type && getBodyElement(type));
export const headerTitle = createSelector(getUiModalStore,
  ({ type }) => type && getHeaderTitle(type));
