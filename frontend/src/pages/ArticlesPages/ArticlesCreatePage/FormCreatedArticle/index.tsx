import React, { useCallback } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ArticlesSlice } from 'store';
import { Button, Input, Select, Textarea } from 'shared';
import { useAppDispatch } from 'app/hooks';
import { toast } from 'react-toastify';
import { useCropTitle } from 'shared/helpers/hooks';

const FormCreationArticle = () => {
  const dispatch = useAppDispatch();
  const cropTitle = useCropTitle();
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      title: "",
      text: "",
      author: undefined,
    }
  });

  const successHandle = useCallback(() => toast.success(`Статья ${cropTitle(getValues().title)} успешно создана.`), []);
  const errorHandle = useCallback(() =>  toast.error(`Не удалось сохранить статью`), []);

  const onSubmit: SubmitHandler<FieldValues> = useCallback(({ text, title, author: author_id }) => {
    const article = {
      text,
      title,
      author_id,
    };
    dispatch(ArticlesSlice.createArticleAsync({
      article,
      successHandle,
      errorHandle,
    }));
  }, [])
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Controller
        name="title"
        control={ control }
        render={ ({ field }) => (<Input label="Заголовок" idElement="title" { ...field }/>) }
      />
      <Controller
        name="text"
        control={ control }
        render={ ({ field }) => (<Textarea label="Текст" idElement="text" { ...field }/>) }
      />
      <Controller
        name="author"
        control={ control }
        render={ ({ field }) => (<Select
          { ...field }
          placeholder="Выбирите автора..."
          options={ [
            { label: 'Автор 1', value: '1' },
            { label: 'Автор 2', value: '2' }
          ] }/>) }
      />

      <Button typeButton="submit">Сохранить</Button>
    </form>
  );
};

export default FormCreationArticle;
