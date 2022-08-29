import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShowModal, ModalReducer } from './entities';

const initialState: ModalReducer = {
  isShow: false,
  type: undefined,
};

const modalSlice = createSlice({
  name: 'ui/modalSlice',
  initialState,
  reducers: {
    showModal: (state, {payload: modal }: PayloadAction<IShowModal>) => ({
      isShow: true,
      ...modal,
    }),
    hideModal: () => ({
      ...initialState,
    }),
  },
});

export const modalReducer = modalSlice.reducer;
export const { showModal, hideModal } = modalSlice.actions;
