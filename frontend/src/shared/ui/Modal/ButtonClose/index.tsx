import React, { FC } from 'react';
import { Icon } from 'shared';
import styles from './index.module.scss';

const ButtonClose: FC<React.ButtonHTMLAttributes<any>> = (props) => (
  <button {...props} type="button" className={styles.button_close}>
    <Icon.XIcon />
  </button>
);

export default ButtonClose;
