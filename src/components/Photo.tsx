import React from "react";

import { IPhoto } from "store/types";

interface IProps {
  photo: IPhoto;
  onClick: (image: IPhoto) => () => void;
}

const Photo: React.FC<IProps> = ({ photo, onClick }) => {
  return (
    <figure className="photos__container" key={photo.id}>
      <img
        onClick={onClick(photo)}
        style={{ width: "100%" }}
        key={photo.id}
        src={photo.thumbnailUrl}
        srcSet={`${photo.thumbnailUrl} 150w, ${photo.url} 600w`}
        alt={photo.title}
      />
      <figcaption className="top-left">{photo.title}</figcaption>
    </figure>
  );
};

export default Photo;
