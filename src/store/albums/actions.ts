import { IAlbum } from "store/types";
import { AlbumsActionType, IReceiveAlbumsAction } from "./types";

const receiveAlbums = (albums: IAlbum[]): IReceiveAlbumsAction => ({
  payload: { albums },
  type: AlbumsActionType.RECEIVE_ALBUMS,
});

export { receiveAlbums };
