import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticlesIndexPage from 'pages/ArticlesPages';
import Layout from 'shared/ui/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<ArticlesIndexPage />}/>
      </Route>
    </Routes>
  );
};

export default AppRouter;
