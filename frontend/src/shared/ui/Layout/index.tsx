import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Layout: FC = () => (
  <div className="container">
    <Outlet />
    <ToastContainer />
  </div>
);

export default Layout;
