import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
import { Modal } from 'shared';

const Layout: FC = () => (
  <>
    <div className="container">
      <Outlet />
      <ToastContainer />
    </div>
    <Modal />
  </>
);

export default Layout;
