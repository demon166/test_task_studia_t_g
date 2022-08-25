import React, { useCallback } from 'react';
import { IArticle } from 'store/articles';
import { Button } from 'shared';
import { useAppDispatch } from 'app/hooks';
import { ArticlesSlice } from 'store';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface ArticleItemProps {
  article: IArticle
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const editArticleHandle = useCallback(() => {
    navigate(`/articles/${article.id}`)
  }, [navigate, article.id])

  const deleteArticleHandle = useCallback(() => {
    dispatch(ArticlesSlice.deleteArticleAsync(article))
  }, [dispatch, article])


  return (
    <tr className={ styles.table__row }>
      <td>{ article.title }</td>
      <td>{ article.author }</td>
      <td>
        <div className={ styles.btn_group }>
          <Button styleBtn="primary" onClick={ editArticleHandle }>Редактировать</Button>
          <Button styleBtn="danger" onClick={ deleteArticleHandle }>Удалить</Button>
        </div>
      </td>
    </tr>
  );
};

export default ArticleItem;
