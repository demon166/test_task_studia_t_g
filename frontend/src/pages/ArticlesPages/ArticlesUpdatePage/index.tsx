import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ArticlesSlice } from 'store';
import { RequestStatuses, Spin } from 'shared';
import FormUpdateArticle from 'pages/ArticlesPages/ArticlesUpdatePage/FormUpdateArticle';

const ArticlesUpdatePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const article = useAppSelector(ArticlesSlice.getArticle);
  const status = useAppSelector(ArticlesSlice.getStatus);

  useEffect(() => {
    if (id) {
      dispatch(ArticlesSlice.getArticleAsync({ id }));
    }
  }, []);

  if (status === RequestStatuses.FAILURE) {
    navigate('/error404');
  }
  return (
    <div>
      {status === RequestStatuses.LOADING && <Spin />}
      {status === RequestStatuses.SUCCESS && article && (
        <>
          <h1>Обновление записи</h1>
          <FormUpdateArticle
            id={article.id}
            title={article.title}
            text={article.text}
            author={article.author}
          />
        </>
      )}

    </div>
  );
};

export default ArticlesUpdatePage;
