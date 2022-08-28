import React from 'react';
import FormCreationArticle from './FormCreatedArticle';
import { ButtonBack } from 'shared';

const ArticlesCreatePage = () => (
  <div>
    <ButtonBack />
    <h1>Новая статья</h1>
    <FormCreationArticle />
  </div>
);

export default ArticlesCreatePage;
