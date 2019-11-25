import React from "react";
import { IPhoto } from "store/types";

import PhotoTile from "components/Tile/Photo";

import "./PhotosGrid.scss";

interface IPhotosProps {
  photos: IPhoto[];
  onPhotoClick: (image: IPhoto) => () => void;
}

const PhotosGrid: React.FC<IPhotosProps> = ({ photos, onPhotoClick }) => {
  const Photos =
    photos &&
    photos.map((photo) => (
      <PhotoTile onClick={onPhotoClick} key={photo.id} photo={photo} />
    ));

  return <section className="photos">{Photos}</section>;
};

export default PhotosGrid;
