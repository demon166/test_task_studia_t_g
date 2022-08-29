import React, { useCallback, useEffect } from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { Button, Select } from 'shared';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AuthorSlice, UISlice } from 'store';
import styles from './index.module.scss';

interface AuthorSelectProps {
  control: any;
  error: FieldError | undefined;
}

const AuthorSelect = ({ control, error }: AuthorSelectProps) => {
  const dispatch = useAppDispatch();
  const authors = useAppSelector(AuthorSlice.getAuthorsForSelect);
  const authorCreateClickHandle = useCallback(() => {
    dispatch(UISlice.ModalSlice.showModal({ type: 'createAuthor' }));
  }, []);

  useEffect(() => {
    dispatch(AuthorSlice.getAuthorsAsync());
  }, [dispatch]);

  return (
    <div className={styles.wrap}>
      <Controller
        name="author"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (<Select
          placeholder="Выбирите автора..."
          error={error}
          options={authors}
          {...field}
        />)}
      />
      <Button styleBtn="primary" type="button" onClick={authorCreateClickHandle}>
        Создать автора
      </Button>
    </div>
  );
};

export default AuthorSelect;
