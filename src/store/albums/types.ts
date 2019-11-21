import { IAlbum, IPagination, IUser } from "store/types";

export enum AlbumsActionType {
  RECEIVE_ALBUMS = "albums/receive_albums",
  RECEIVE_USERS = "albums/receive_users",
}

export interface IAlbumsAction {
  type: AlbumsActionType;
}

export interface IReceiveAlbumsAction extends IAlbumsAction {
  payload: { albums: IAlbum[] };
  type: AlbumsActionType.RECEIVE_ALBUMS;
}

export interface IReceiveUsersAction extends IAlbumsAction {
  payload: { users: IUser[] };
  type: AlbumsActionType.RECEIVE_USERS;
}

export interface IAlbumsState {
  list: IAlbum[];
  users: IUser[];
  pagination: Partial<IPagination>;
}
