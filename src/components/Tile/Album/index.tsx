import React from "react";
import { Link } from "react-router-dom";

import { IAlbum } from "store/types";

import "./AlbumTile.scss";

interface IAlbumTileProps {
  album: Omit<IAlbum, "userId">;
  user: string;
}

const AlbumTile: React.FC<IAlbumTileProps> = ({
  album: { title, id },
  user,
}) => (
  <Link key={id} className="link album-tile" to={`/albums/${id}`}>
    <ul className="list album-tile__details">
      <li className="list-item text-normal full-width">
        <span className="bold uppercase">{title}</span>
      </li>
      <li className="list-item text-normal full-width text-right">{user}</li>
    </ul>
  </Link>
);

export default AlbumTile;
