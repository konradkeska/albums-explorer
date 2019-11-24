import * as React from "react";
import eng from "lang/eng";
import { IAlbum } from "store/types";

interface IAlbumProps {
  album: IAlbum;
}

const Album: React.FC<IAlbumProps> = ({ album: { title } }) => (
  <section className="album">
    <h5 className="sub-title">{eng.ALBUM_TITLE}</h5>
    <h1 className="uppercase">{title}</h1>
  </section>
);

export default Album;
