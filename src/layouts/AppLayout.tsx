import React from "react";

import { ToastContainer } from "react-toastify";

import "./AppLayout.scss";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className="search-wrapper">
        <form className="search-form">
          <input
            className="search-form__input"
            type="search"
            name="_q"
            placeholder="Enter album name"
            autoFocus={true}
          />
        </form>
      </div>
      <div className="content-wrapper">
        <main className="content">{children}</main>
        <footer className="footer-bar">
          <p className="text-normal author">© 2019</p>
          <p className="text-normal author">Album app</p>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
};

export default AppLayout;
