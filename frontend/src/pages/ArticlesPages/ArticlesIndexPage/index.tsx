import React from 'react';
import { ArticlesList } from 'features';
import HeaderArticlePages from '../Components/Header';

const ArticlesIndexPage = () => {
  return (
    <main>
      <HeaderArticlePages/>
      <ArticlesList/>
    </main>
  );
};

export default ArticlesIndexPage;
