import * as React from "react";
import { IPhoto } from "store/types";

import Photo from "components/Photo";

interface IPhotosProps {
  photos: IPhoto[];
  onPhotoClick: (image: IPhoto) => () => void;
}

const PhotosGrid: React.FC<IPhotosProps> = ({ photos, onPhotoClick }) => {
  const Photos =
    photos &&
    photos.map((photo) => (
      <Photo onClick={onPhotoClick} key={photo.id} photo={photo} />
    ));
  return <>{Photos}</>;
};

export default PhotosGrid;
