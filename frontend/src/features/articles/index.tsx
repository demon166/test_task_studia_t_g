import React, { FC, memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ArticlesSlice } from 'store';
import Spin from 'shared/ui/Spin';
import { RequestStatuses } from 'shared';
import ArticleItem from 'features/articles/ArticleItem';
import styles from './index.module.scss';

const ArticlesList: FC = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector(ArticlesSlice.getArticles);
  const status = useAppSelector(ArticlesSlice.getStatus);

  useEffect(()=> {
    dispatch(ArticlesSlice.getArticlesAsync());
  }, [dispatch])
  return (
    <div>
      { status === RequestStatuses.LOADING && <Spin/> }
      { status === RequestStatuses.SUCCESS &&
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Название статьи</th>
              <th>Автор</th>
            </tr>
          </thead>
          <tbody>
          { articles
            && articles.map((article) => (
              <ArticleItem article={article} key={article.id}/>
            )) }
          </tbody>
        </table>
      }
    </div>
  );
};

export default memo(ArticlesList);
