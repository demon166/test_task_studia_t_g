import React, { useCallback } from 'react';
import styles from 'pages/ArticlesPages/Components/Header/Buttons/index.module.scss';
import { Button } from 'shared';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ArticlesSlice, ModeSlice } from 'store';

const Buttons = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isDemoMode = useAppSelector(ModeSlice.isDemoMode);

  const createClickHandle = useCallback(() => {
    navigate('/articles/create');
  }, [navigate]);

  const demoModeHandle: (
    (event: React.MouseEvent<Element, MouseEvent>) => void) | undefined = () => {
    dispatch(ModeSlice.changeMode(isDemoMode ? 'default' : 'demo'));
    if (isDemoMode) {
      localStorage.clear();
    }
    dispatch(ArticlesSlice.getArticlesAsync());
  };

  return (
    <div className={styles.btn_controllers}>
      <Button onClick={createClickHandle}>
        Создать
      </Button>
      {isDemoMode && (
        <h2>Включен демо режим</h2>
      )}
      <Button onClick={demoModeHandle} active={isDemoMode}>
        {isDemoMode ? 'Отключить демо' : 'Демо'}
      </Button>
    </div>
  );
};

export default Buttons;
