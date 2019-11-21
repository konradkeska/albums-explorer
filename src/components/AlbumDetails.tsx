import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { loadAlbumUser } from "store/albumDetails/api";
import { loadUser, loadUserPosts } from "store/albumDetails/services";

const AlbumDetails: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    loadAlbumUser(Number(id));
    loadUser(Number(id));
    loadUserPosts(Number(id));
  }, [id]);

  return (
    <nav className="page-nav">
      <button
        onClick={() => history.goBack()}
        className="page-nav__button page-nav__button--active"
      >
        go back
      </button>
    </nav>
  );
};

export default AlbumDetails;
