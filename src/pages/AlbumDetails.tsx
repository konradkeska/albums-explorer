import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import * as services from "store/albumDetails/services";
import { IPhoto } from "store/types";

import Details from "components/Details";
import Lightbox from "components/Lightbox";
import Navigation from "components/Navigation";
import Spinner from "components/Spinner";

interface IActionsProps {
  loadDetails: (albumId: number) => void;
}

const ALBUM_DETAILS_PRELOAD_TIMEOUT = 1000;

const AlbumDetails: React.FC<IActionsProps> = ({ loadDetails }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);

  const [lightboxImage, setLightboxImage] = useState<IPhoto | null>(null);

  const openLightbox = (image: IPhoto) => () => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const LightboxComponent = lightboxImage && (
    <Lightbox image={lightboxImage && lightboxImage} onClose={closeLightbox} />
  );

  useEffect(() => {
    loadDetails(Number(id));
    setTimeout(() => setLoading(false), ALBUM_DETAILS_PRELOAD_TIMEOUT);
  }, [loadDetails, id]);

  return (
    <>
      {loading ? <Spinner /> : <Details onPhotoClick={openLightbox} />}
      <Navigation />
      {LightboxComponent}
    </>
  );
};

const mapDispatchToProps = {
  loadDetails: services.loadDetails,
};

export default connect(null, mapDispatchToProps)(AlbumDetails);
