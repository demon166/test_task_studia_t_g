import React, { useCallback } from 'react';
import { Button, Input } from 'shared';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from 'app/hooks';
import { toast } from 'react-toastify';
import { AuthorSlice, UISlice } from 'store';
import styles from './index.module.scss';

interface IFormCreateAuthor {
  full_name: string;
}

const schema = yup.object({
  full_name: yup.string().required(),
}).required();

const AuthorModalCreate = () => {
  const dispatch = useAppDispatch();
  const {
    control, handleSubmit, formState: { errors },
  } = useForm<IFormCreateAuthor>({
    defaultValues: {
      full_name: '',
    },
    resolver: yupResolver(schema),
  });

  const successHandle = useCallback(() => {
    toast.success('Автор успешно добавлен.');
    dispatch(UISlice.ModalSlice.hideModal());
  }, []);
  const errorHandle = useCallback(() => toast.error('Не удалось добавить автора'), []);

  const onSubmit: SubmitHandler<IFormCreateAuthor> = useCallback(
    ({ full_name }) => {
      const author = { full_name };
      dispatch(AuthorSlice.createAuthorAsync({
        author,
        successHandle,
        errorHandle,
      }));
    }, [dispatch, successHandle, errorHandle]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="full_name"
        control={control}
        render={({ field }) => (<Input
          label="Полное имя автора"
          idElement="author_create_input"
          error={errors.full_name}
          {...field}
        />)}
      />
      <div className={styles.button_wrap}>
        <Button type="submit" styleBtn="primary">Создать</Button>
      </div>
    </form>
  );
};

export default AuthorModalCreate;
