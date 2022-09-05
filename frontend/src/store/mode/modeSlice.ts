import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModeReducer, TService } from './entities';

const initialState = {
  mode: 'default',
} as IModeReducer;

const modeSlice = createSlice({
  name: 'modeSlice',
  initialState,
  reducers: {
    changeMode: (state, { payload }: PayloadAction<TService>) => {
      state.mode = payload;
    },
  },
});

export const modeReducer = modeSlice.reducer;
export const { changeMode } = modeSlice.actions;
