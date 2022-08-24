import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './styles.scss';

const Layout: FC = () => {
  return (
    <div className="container">
      <Outlet/>
    </div>
  );
};

export default Layout;
