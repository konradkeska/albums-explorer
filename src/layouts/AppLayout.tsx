import React from "react";

import { ToastContainer } from "react-toastify";

import Search from "components/Search";

import "./AppLayout.scss";

const AppLayout: React.FC = ({ children }) => (
  <>
    <div className="content-wrapper">
      <Search />
      <main className="content">{children}</main>
      <footer className="footer-bar">
        <p className="text-normal copyright">2019 © Konrad Kęska</p>
        <p className="text-normal app-name">Album app</p>
      </footer>
    </div>
    <ToastContainer />
  </>
);

export default AppLayout;
