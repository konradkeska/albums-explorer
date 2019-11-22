import React from "react";

import { IAlbum } from "store/types";

import "./Tile.scss";

interface ITileProps {
  album: Omit<IAlbum, "userId">;
  index: number;
  user: string;
}

const Tile: React.FC<ITileProps> = ({ album: { id, title }, index, user }) => (
  <a key={id} className="link tile" href={`/albums/${id}`}>
    <ul className="list tile__details">
      <li className="list-item text-normal title">
        <span style={{ paddingRight: "15px" }}>{index + 1}.</span>
        <span className="bold uppercase">{title}</span>
      </li>
      <li className="list-item text-normal author">{user}</li>
    </ul>
  </a>
);
export default Tile;
