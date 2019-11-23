import React, { useEffect, useState } from "react";

import { IPhoto } from "store/types";
import { disableScrolling, enableScrolling } from "utils/helpers";

import Spinner from "./Spinner";

import "./Lightbox.scss";

export interface ILightboxProps {
  image: IPhoto;
  onClose: () => void;
}

const LIGHTBOX_PRELOAD_TIMEOUT: number = 1000;

const Lightbox: React.FC<ILightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    disableScrolling();
    setTimeout(() => setLoading(false), LIGHTBOX_PRELOAD_TIMEOUT);
  }, []);

  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    onClose();
    enableScrolling();
  };

  const Image = <img src={image.url} alt={image.title} />;

  return (
    <div className="lightbox" onClick={handleClose}>
      {loading ? <Spinner /> : Image}
    </div>
  );
};

export default Lightbox;
