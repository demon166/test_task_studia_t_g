import React, { useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArticlesSlice } from 'store';
import { Button, Input, Textarea, useCropTitle } from 'shared';
import { useAppDispatch } from 'app/hooks';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AuthorSelect } from 'pages/ArticlesPages/Components';

interface IFormCreateAndUpdateArticle {
  title: string,
  text: string,
  author: string,
}

const schema = yup.object({
  title: yup.string().required(),
  text: yup.string().required(),
  author: yup.number().positive().integer().required(),
}).required();

const FormCreationArticle = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cropTitle = useCropTitle();
  const {
    control, handleSubmit, getValues, formState: { errors },
  } = useForm<IFormCreateAndUpdateArticle>({
    defaultValues: {
      title: '',
      text: '',
      author: undefined,
    },
    resolver: yupResolver(schema),
  });
  const successHandle = useCallback(() => {
    toast.success(`Статья ${cropTitle(getValues().title)} успешно создана.`);
    navigate('/');
  }, [cropTitle, getValues]);
  const errorHandle = useCallback(() => toast.error('Не удалось сохранить статью'), []);

  const onSubmit: SubmitHandler<IFormCreateAndUpdateArticle> = useCallback(
    ({ text, title, author }) => {
      const article = { text, title, author_id: author };
      dispatch(ArticlesSlice.createArticleAsync({
        article,
        successHandle,
        errorHandle,
      }));
    }, [dispatch, successHandle, errorHandle]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (<Input
          label="Заголовок"
          idElement="title"
          error={errors.title}
          {...field}
        />)}
      />
      <Controller
        name="text"
        control={control}
        render={({ field }) => (<Textarea
          label="Текст"
          idElement="text"
          error={errors.text}
          {...field}
        />)}
      />
      <AuthorSelect error={errors.author} control={control} />
      <Button type="submit">Сохранить</Button>
    </form>
  );
};

export default FormCreationArticle;
