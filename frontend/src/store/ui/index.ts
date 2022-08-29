import { combineReducers } from '@reduxjs/toolkit';
import * as ModalSlice from './modal';

const uiReducer = combineReducers({
  modal: ModalSlice.modalReducer,
});

export { uiReducer, ModalSlice };
