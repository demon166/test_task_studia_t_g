import React, { FC } from 'react';
import { Control, Controller, FieldErrorsImpl } from 'react-hook-form';
import { Button, Input, Textarea } from 'shared';
import { AuthorSelect } from 'pages/ArticlesPages/Components/index';
import { IFormCreateAndUpdateArticle } from 'store/articles/entities';

interface FormArticleProps {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  control: Control<IFormCreateAndUpdateArticle, any> | undefined;
  errors: FieldErrorsImpl<{ title: string, text: string, author: string }>;
}

const FormArticle: FC<FormArticleProps> = ({ onSubmit, control, errors }: FormArticleProps) => (
  <form onSubmit={onSubmit}>
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

export default FormArticle;
