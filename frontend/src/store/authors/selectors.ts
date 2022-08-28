import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const getAuthorsSliceStore = (state: RootState) => state.authors;

export const getAuthors = createSelector(getAuthorsSliceStore, ({ authors }) => authors);
export const getAuthorsForSelect = createSelector(getAuthorsSliceStore, ({ authors }) =>
  (authors
    ? authors.map((author) => (
      {
        id: author.id,
        label: author.full_name,
        value: author.id,
      }
    ))
    : []
  ));
export const getError = createSelector(getAuthorsSliceStore, ({ error }) => error);
export const getStatus = createSelector(getAuthorsSliceStore, ({ status }) => status);
