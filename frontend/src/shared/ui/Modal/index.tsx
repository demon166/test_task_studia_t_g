import React, { FC } from 'react';
import Backdrop from '../Backdrop';
import styles from './index.module.scss';
import ButtonClose from './ButtonClose';

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

const Modal: FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}: ModalProps) => {
  if (isShown) {
    return (
      <>
        <Backdrop />
        <div className={styles.modal}>
          <div className={styles.button_close_wrap}>
            <ButtonClose onClick={hide} />
          </div>
          <header>
            <h2 className={styles.header__title}>{headerText}</h2>
          </header>
          <div className={styles.modal__body}>
            {modalContent}
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default Modal;
