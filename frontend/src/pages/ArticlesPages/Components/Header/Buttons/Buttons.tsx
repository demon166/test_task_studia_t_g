import React, { useCallback } from 'react';
import styles from 'pages/ArticlesPages/Components/Header/Buttons/index.module.scss';
import { Button } from 'shared';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
  let navigate = useNavigate();
  const createClickHandle = useCallback(() => {
    navigate('/articles/create')
  }, [navigate]);
  return (
    <div className={ styles.btn_controllers }>
      <Button onClick={ createClickHandle }>
        Создать
      </Button>
      <Button>
        Демо
      </Button>
    </div>
  );
};

export default Buttons;
