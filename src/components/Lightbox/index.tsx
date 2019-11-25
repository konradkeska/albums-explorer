import React, { useEffect, useState } from "react";

import { IPhoto } from "store/types";

import { PRELOAD_TIMEOUT } from "config/constants";
import { disableScrolling, enableScrolling } from "utils/helpers";

import Spinner from "../Spinner";

import "./Lightbox.scss";

export interface ILightboxProps {
  image: IPhoto;
  onClose: () => void;
}

const Lightbox: React.FC<ILightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    disableScrolling();
    setTimeout(() => setLoading(false), PRELOAD_TIMEOUT);
  }, []);

  const [loading, setLoading] = useState(true);

  const handleClose = () => {
    onClose();
    enableScrolling();
  };

  const Image = <img className="image" src={image.url} alt={image.title} />;

  return (
    <div className="lightbox" onClick={handleClose}>
      {loading ? <Spinner /> : Image}
    </div>
  );
};

export default Lightbox;
