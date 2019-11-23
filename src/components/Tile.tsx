import React from "react";

import { IAlbum } from "store/types";

import "./Tile.scss";

interface ITileProps {
  album: Omit<IAlbum, "userId">;
  user: string;
}

const Tile: React.FC<ITileProps> = ({ album: { id, title }, user }) => (
  <a key={id} className="link tile" href={`/albums/${id}`}>
    <ul className="list tile__details">
      <li className="list-item text-normal full-width">
        <span className="bold uppercase">{title}</span>
      </li>
      <li className="list-item text-normal full-width text-right">{user}</li>
    </ul>
  </a>
);

export default Tile;
