import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import * as services from "store/albumDetails/services";
import { IPhoto } from "store/types";

import { PRELOAD_TIMEOUT } from "config/constants";

import Details from "components/Details";
import Lightbox from "components/Lightbox";
import Spinner from "components/Spinner";

interface IActionsProps {
  loadDetails: (albumId: number) => void;
}

const AlbumDetails: React.FC<IActionsProps> = ({ loadDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    loadDetails(Number(id));
    setTimeout(() => setLoading(false), PRELOAD_TIMEOUT);
  }, [loadDetails, id]);

  const [loading, setLoading] = useState<boolean>(true);
  const [lightboxImage, setLightboxImage] = useState<IPhoto | null>(null);

  const openLightbox = (image: IPhoto) => () => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const LightboxComponent = lightboxImage && (
    <Lightbox image={lightboxImage && lightboxImage} onClose={closeLightbox} />
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
