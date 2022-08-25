import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ArticlesPages } from 'pages';
import { Layout } from 'shared';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route path="/" element={ <ArticlesPages.Index/> }/>
        <Route path="articles">
          <Route path="create" element={ <ArticlesPages.Create/> }/>
          <Route path=":id" element={ <ArticlesPages.Update/> }/>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
