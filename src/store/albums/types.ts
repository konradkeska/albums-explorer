export enum AlbumsActionType {
  RECEIVE_ALBUMS = "albums/receive_albums",
}

export interface IAlbumsAction {
  type: AlbumsActionType;
}

export interface IReceiveAlbumsAction extends IAlbumsAction {
  payload: { albums: any };
  type: AlbumsActionType.RECEIVE_ALBUMS;
}

export interface IAlbumsState {
  list: [];
}
