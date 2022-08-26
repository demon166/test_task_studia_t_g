import React, { useCallback } from 'react';
import styles from './index.module.scss';
import { Button } from 'shared';
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
  const navigate = useNavigate();
  const redirectHomeHandle = useCallback(() => {
    navigate('/');
  }, [navigate]);
  return (
    <div className={styles.error_wrap}>
      404 Page Not Found
      <Button onClick={redirectHomeHandle}>На главную</Button>
    </div>
  );
};

export default Error404Page;
