import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import {
  loadAlbum,
  loadAlbumPhotos,
  loadAlbumUser,
  loadAlbumUserPosts,
} from "store/albumDetails/api";

import eng from "lang/eng";

const AlbumDetails: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    loadAlbum(Number(id));
    loadAlbumPhotos(Number(id));
    loadAlbumUser(Number(id));
    loadAlbumUserPosts(Number(id));
  }, [id]);

  const onClick = () => history.goBack();

  return (
    <nav className="page-nav">
      <button
        onClick={onClick}
        className="page-nav__button page-nav__button--active"
      >
        {eng.GO_BACK}
      </button>
    </nav>
  );
};

export default AlbumDetails;
