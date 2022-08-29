import React, { FC, useCallback } from 'react';
import Backdrop from '../Backdrop';
import styles from './index.module.scss';
import ButtonClose from './ButtonClose';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { UISlice } from 'store';

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const isShown = useAppSelector(UISlice.ModalSlice.getIsShow);
  const headerText = useAppSelector(UISlice.ModalSlice.headerTitle);
  const bodyElement = useAppSelector(UISlice.ModalSlice.BodyElement);
  const hideModalHandle = useCallback(() => {
    dispatch(UISlice.ModalSlice.hideModal());
  }, []);

  if (isShown) {
    return (
      <>
        <Backdrop />
        <div className={styles.modal}>
          <div className={styles.button_close_wrap}>
            <ButtonClose onClick={hideModalHandle} />
          </div>
          <header>
            <h2 className={styles.header__title}>{headerText}</h2>
          </header>
          <div className={styles.modal__body}>
            {bodyElement}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default Modal;
