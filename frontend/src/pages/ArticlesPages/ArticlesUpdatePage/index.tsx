import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlesUpdatePage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Обновление</h1>
      {id}
    </div>
  );
};

export default ArticlesUpdatePage;
