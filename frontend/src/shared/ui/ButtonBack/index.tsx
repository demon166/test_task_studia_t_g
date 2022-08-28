import React, { useCallback } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const ButtonBack = () => {
  const navigate = useNavigate();
  const clickHandle = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Button className={styles.button__back} styleBtn="danger" onClick={clickHandle} type="button">Назад</Button>
  );
};

export default ButtonBack;
