import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const getModeSliceStore = (state: RootState) => state.mode;

export const getMode = createSelector(getModeSliceStore, ({ mode }) => mode);
export const isDemoMode = createSelector(getModeSliceStore, ({ mode }) => mode === 'demo');
export const isDefault = createSelector(getModeSliceStore, ({ mode }) => mode === 'default');
