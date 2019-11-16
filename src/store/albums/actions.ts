import { AlbumsActionType, IReceiveAlbumsAction } from "./types";

const receiveAlbums = (albums: any): IReceiveAlbumsAction => ({
  payload: { albums },
  type: AlbumsActionType.RECEIVE_ALBUMS,
});

export { receiveAlbums };
