import React, { useEffect, useState } from "react";

import { IPhoto } from "store/types";

import Spinner from "./Spinner";

import "./Lightbox.scss";

interface IProps {
  image: IPhoto;
  onClose: () => void;
}

const LIGHTBOX_PRELOAD_TIMEOUT: number = 1000;

const Lightbox: React.FC<IProps> = ({ image, onClose }) => {
  const [loading, setLoading] = useState(true);

  const disableScrolling = () => {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
  };

  const enableScrolling = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  useEffect(() => {
    disableScrolling();
    setTimeout(() => setLoading(false), LIGHTBOX_PRELOAD_TIMEOUT);
  }, []);

  const Image = <img src={image.url} alt={image.title} />;

  const handleClose = () => {
    onClose();
    enableScrolling();
  };

  return (
    <div className="lightbox" onClick={handleClose}>
      {loading ? <Spinner /> : Image}
    </div>
  );
};

export default Lightbox;
