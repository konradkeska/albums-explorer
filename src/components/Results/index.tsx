import React from "react";
import { connect } from "react-redux";

import * as selectors from "store/albums/selectors";
import { IAlbum, IRootState, IUser } from "store/types";

import AlbumTile from "components/Tile/Album";

interface IConnectedProps {
  albums: IAlbum[];
  users: IUser[];
}

const Results: React.FC<IConnectedProps> = ({ albums, users }) => {
  const getAlbumUser = (userId: number) =>
    users
      .filter(({ id }) => id === userId)!!
      .map(({ name, username }) => `${name} ${username}`)[0] || "-";

  const albumsTiles = albums.map((album) => (
    <AlbumTile key={album.id} album={album} user={getAlbumUser(album.userId)} />
  ));

  return <section className="results full-width">{albumsTiles}</section>;
};

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  albums: selectors.getAlbums(state),
  users: selectors.getUsers(state),
});

export default connect(mapStateToProps, {})(Results);
