import React, { FC, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ArticlesSlice } from 'store';
import { useCropTitle } from 'shared';
import { useAppDispatch } from 'app/hooks';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ArticleComponents } from 'pages';
import { IArticle } from 'store/articles';

const schema = yup.object({
  title: yup.string().required(),
  text: yup.string().required(),
  author: yup.string().required(),
}).required();

const FormUpdateArticle: FC<IArticle> = ({
  id,
  title: current_title,
  author: current_author,
  text: current_text,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cropTitle = useCropTitle();
  const {
    control, handleSubmit, getValues, formState: { errors },
  } = useForm<ArticlesSlice.IFormCreateAndUpdateArticle>({
    defaultValues: {
      title: current_title,
      text: current_text,
      author: current_author.id,
    },
    resolver: yupResolver(schema),
  });
  const successHandle = useCallback(() => {
    toast.success(`Статья ${cropTitle(getValues().title)} успешно обновлена.`);
    navigate('/');
  }, [cropTitle, getValues]);
  const errorHandle = useCallback(() => toast.error('Не удалось обновить статью'), []);

  const onSubmit: SubmitHandler<ArticlesSlice.IFormCreateAndUpdateArticle> = useCallback(
    ({ text, title, author }) => {
      const article = { text, title, author_id: author, id };
      dispatch(ArticlesSlice.updateArticleAsync({
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

export default FormUpdateArticle;
