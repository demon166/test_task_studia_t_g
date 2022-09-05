import {
  IArticle,
  IArticleCreateAndUpdate,
  IArticleResponse,
  IGetAndDeleteArticleRequest,
} from './entities';
import { v4 as uuidv4 } from 'uuid';
import { IAuthor, IAuthorResponse } from '../authors';

export const ArticlesServiceDemo = {
  getArticles: () => {
    const articles = JSON.parse(localStorage.getItem('articles') || '{"data":[]}') as IArticleResponse;
    return ({
      data: {
        data: articles.data,
      },
    });
  },
  getArticle: ({ id }: IGetAndDeleteArticleRequest) => {
    const articles = JSON.parse(localStorage.getItem('articles') || '{"data":[]}') as IArticleResponse;
    return ({
      data: {
        data: articles.data.find((article) => article.id === id),
      },
    });
  },
  deleteArticle: ({ id }: IGetAndDeleteArticleRequest) => {
    const articles = JSON.parse(localStorage.getItem('articles') || '{"data":[]}') as IArticleResponse;
    const articleDeleted: IArticle = articles.data
      .splice(articles.data.findIndex((article) => article.id === id), 1)[0];
    localStorage.setItem('articles', JSON.stringify(articles));
    return {
      data: {
        article: articleDeleted,
        message: 'Статья успешно создана',
      },
    };
  },
  createArticle: (article: IArticleCreateAndUpdate) => {
    const articles = JSON.parse(localStorage.getItem('articles') || '{"data":[]}') as IArticleResponse;
    if (articles.data.length >= 3) {
      throw new Error('Бол');
    }
    const authors = JSON.parse(localStorage.getItem('authors') || '{"data":[]}') as IAuthorResponse;
    const currentAuthor = authors.data.find((author) => author.id === article.author_id) as IAuthor;
    const articleForDB = {
      id: uuidv4(),
      title: article.title,
      text: article.text,
      author: currentAuthor,
    };
    articles.data.push(articleForDB);
    localStorage.setItem('articles', JSON.stringify(articles));
    return {
      data: {
        article: articleForDB,
        message: 'Статья успешно создана',
      },
    };
  },
  updateArticle: (article: IArticleCreateAndUpdate) => {
    const articles = JSON.parse(localStorage.getItem('articles') || '{"data":[]}') as IArticleResponse;
    const articleEdit: IArticle = articles.data[
      articles.data.findIndex((articleItem) => articleItem.id === article.id)
    ];
    const authors = JSON.parse(localStorage.getItem('authors') || '{"data":[]}') as IAuthorResponse;
    const currentAuthor = authors.data.find((author) => author.id === article.author_id) as IAuthor;
    articleEdit.title = article.title;
    articleEdit.text = article.text;
    articleEdit.author.id = article.author_id;
    articleEdit.author.full_name = currentAuthor.full_name;
    localStorage.setItem('articles', JSON.stringify(articles));
    return {
      data: {
        article: articleEdit,
        message: 'Статья успешно создана',
      },
    };
  },
};
