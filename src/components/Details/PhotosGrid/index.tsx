import React from "react";
import { IPhoto } from "store/types";

import PhotoTile from "components/Tile/Photo";

import "./PhotosGrid.scss";

interface IPhotosGridProps {
  photos: IPhoto[];
  onPhotoClick: (image: IPhoto) => () => void;
}

const PhotosGrid: React.FC<IPhotosGridProps> = ({ photos, onPhotoClick }) => {
  const Photos = photos?.map((photo) => (
    <PhotoTile onClick={onPhotoClick} key={photo.id} photo={photo} />
  ));

  return <section className="photos">{Photos}</section>;
};

export default PhotosGrid;
