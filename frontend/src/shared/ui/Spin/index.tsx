import React, { FC } from 'react';
import styles from './index.module.scss';

const Spin: FC = () => {
  return (
    <div className={ styles.ring }>Loading
      <span></span>
    </div>
  );
};

export default Spin;
