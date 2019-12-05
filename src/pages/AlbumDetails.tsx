import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import * as services from "store/albumDetails/services";
import { IPhoto } from "store/types";

import Details from "components/Details";
import Lightbox from "components/Lightbox";
import Spinner from "components/Spinner";

interface IActionsProps {
  loadDetails: (
    albumId: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
}

const AlbumDetails: React.FC<IActionsProps> = ({ loadDetails }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    loadDetails(Number(id), setLoading);
  }, [loadDetails, id]);

  const [lightboxImage, setLightboxImage] = useState<IPhoto | null>(null);

  const openLightbox = (image: IPhoto) => () => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const LightboxComponent = lightboxImage && (
    <Lightbox image={lightboxImage} onClose={closeLightbox} />
  );

  return (
    <>
      {loading ? <Spinner /> : <Details onPhotoClick={openLightbox} />}
      {LightboxComponent}
    </>
  );
};

const mapDispatchToProps = { loadDetails: services.loadDetails };

export default connect(null, mapDispatchToProps)(AlbumDetails);
