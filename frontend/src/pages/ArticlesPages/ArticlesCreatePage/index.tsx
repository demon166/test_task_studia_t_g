import React, { useCallback } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ArticlesSlice } from 'store';
import { Input, Textarea, Button, Select } from 'shared';
import { useAppDispatch } from 'app/hooks';

const ArticlesCreatePage = () => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      text: "",
      author: null,
    }
  });
  const onSubmit: SubmitHandler<FieldValues> = useCallback((event) => {
    alert(JSON.stringify(event));
    //TODO: Дописать создание записи
    // dispatch(ArticlesSlice);
  }, [])
  return (
    <div>
      <h1>Новая статья</h1>
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
            options={ [
              { label: 'Автор 1', value: 'Аввтор1' },
              { label: 'Автор 2', value: 'Аввтор2' }
            ] }/>) }
        />

        <Button typeButton="submit">Сохранить</Button>
      </form>
    </div>
  );
};

export default ArticlesCreatePage;
