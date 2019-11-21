import React from "react";
import { IAlbum } from "store/types";

interface IListTileProps {
  album: Omit<IAlbum, "userId">;
  index: number;
  user: string;
}

const ListTile: React.FC<IListTileProps> = ({
  album: { id, title },
  index,
  user,
}) => (
  <a key={id} className="link result-tile" href={`/albums/${id}`}>
    <ul className="list result-tile__details">
      <li className="list-item text-normal title">
        <span className="pr-15">{index + 1}.</span>
        <span className="bold uppercase">{title}</span>
      </li>
      <li className="list-item text-normal author">{user}</li>
    </ul>
  </a>
);

export default ListTile;
