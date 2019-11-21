import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import {
  loadAlbum,
  loadAlbumUser,
  loadAlbumUserPosts,
  loadAlbumPhotos,
} from "store/albumDetails/api";

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
        go back
      </button>
    </nav>
  );
};

export default AlbumDetails;
