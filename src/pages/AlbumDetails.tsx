import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";

import * as services from "store/albumDetails/services";
import { IPhoto } from "store/types";

import Details from "components/Details";
import Lightbox from "components/Lightbox";
import PageNavButton from "components/Pagination/PaginationButton";
import Spinner from "components/Spinner";

import eng from "lang/eng";

import "../components/Pagination/Pagination.scss";

interface IActionsProps {
  loadDetails: (albumId: number) => void;
}

const ALBUM_DETAILS_PRELOAD_TIMEOUT = 1000;

const AlbumDetails: React.FC<IActionsProps> = ({ loadDetails }) => {
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => history.goBack();

  const [lightboxImage, setLightboxImage] = useState<IPhoto | null>(null);

  const openLightbox = (image: IPhoto) => () => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const LightboxComponent = lightboxImage && (
    <Lightbox image={lightboxImage && lightboxImage} onClose={closeLightbox} />
  );

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadDetails(Number(id));
    setTimeout(() => setLoading(false), ALBUM_DETAILS_PRELOAD_TIMEOUT);
  }, [loadDetails, id]);

  return (
    <>
      {loading ? <Spinner /> : <Details onPhotoClick={openLightbox} />}
      <nav className="page-nav">
        <PageNavButton onClick={goBack} isActive={true} label={eng.GO_BACK} />
      </nav>
      {LightboxComponent}
    </>
  );
};

const mapDispatchToProps = { loadDetails: services.loadDetails };

export default connect(null, mapDispatchToProps)(AlbumDetails);
