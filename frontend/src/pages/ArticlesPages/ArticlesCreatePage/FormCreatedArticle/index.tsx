import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArticlesSlice } from 'store';
import { useCropTitle } from 'shared';
import { useAppDispatch } from 'app/hooks';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ArticleComponents } from 'pages';

const schema = yup.object({
  title: yup.string().required(),
  text: yup.string().required(),
  author: yup.string().required(),
}).required();

const FormCreationArticle = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cropTitle = useCropTitle();
  const {
    control, handleSubmit, getValues, formState: { errors },
  } = useForm<ArticlesSlice.IFormCreateAndUpdateArticle>({
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

  const onSubmit: SubmitHandler<ArticlesSlice.IFormCreateAndUpdateArticle> = useCallback(
    ({ text, title, author }) => {
      const article = { text, title, author_id: author };
      dispatch(ArticlesSlice.createArticleAsync({
        article,
        successHandle,
        errorHandle,
      }));
    }, [dispatch, successHandle, errorHandle]);

  return (
    <ArticleComponents.FormArticle
      control={control}
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
    />
  );
};

export default FormCreationArticle;
