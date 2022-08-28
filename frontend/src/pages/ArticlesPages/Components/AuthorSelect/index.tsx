import React, { useCallback, useEffect, useState } from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { Button, Select } from 'shared';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AuthorSlice } from 'store';
import styles from './index.module.scss';
import Modal from '../../../../shared/ui/Modal';
import AuthorModalCreate from '../../../../features/authors/AuthorModalCreate';

interface AuthorSelectProps {
  control: any;
  error: FieldError | undefined;
}

const AuthorSelect = ({ control, error }: AuthorSelectProps) => {
  const dispatch = useAppDispatch();
  const [isShowModal, setIsShowModal] = useState<boolean>(true);
  const authors = useAppSelector(AuthorSlice.getAuthorsForSelect);
  const hideModalHandle = useCallback(() => {
    setIsShowModal(false);
  }, []);
  const showModalHandle = useCallback(() => {
    setIsShowModal(true);
  }, []);
  const authorCreateClickHandle = useCallback(() => {
    showModalHandle();
  }, []);
  console.log(isShowModal);

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
      {/*TODO: Вынести модальное окно в редусер и в Layout*/}
      <Modal isShown={isShowModal} hide={hideModalHandle} modalContent={<AuthorModalCreate />} headerText="Добавить нового автора" />
    </div>
  );
};

export default AuthorSelect;
