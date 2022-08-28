import React, { FC } from 'react';
import styles from './index.module.scss';

const Spin: FC = () => (
  <div className={styles.ring}>
    Loading
    <span />
  </div>
);

export default Spin;
