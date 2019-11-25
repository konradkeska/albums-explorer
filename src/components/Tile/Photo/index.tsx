import React from "react";

import { IPhoto } from "store/types";

import "./PhotoTile.scss";

export interface IPhotoProps {
  photo: IPhoto;
  onClick: (image: IPhoto) => () => void;
}

const PhotoTile: React.FC<IPhotoProps> = ({ photo, onClick }) => (
  <figure className="photo-tile" key={photo.id}>
    <img
      className="image"
      onClick={onClick(photo)}
      key={photo.id}
      src={photo.thumbnailUrl}
      srcSet={`${photo.thumbnailUrl} 150w, ${photo.url} 600w`}
      alt={photo.title}
    />
    <figcaption className="photo-tile__title">{photo.title}</figcaption>
  </figure>
);

export default PhotoTile;
