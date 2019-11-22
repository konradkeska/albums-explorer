import { IAlbum, IUser } from "store/types";

export enum AlbumsActionType {
  RECEIVE_ALBUMS = "albums/receive_albums",
  RECEIVE_USERS = "albums/receive_users",
  RECEIVE_LAST_PAGE = "albums/receive_last_page",
}

export type LoadAlbumsActions =
  | IReceiveAlbumsAction
  | IReceiveUsersAction
  | IReceiveLastPageAction;

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

export interface IReceiveLastPageAction extends IAlbumsAction {
  payload: { page: number };
  type: AlbumsActionType.RECEIVE_LAST_PAGE;
}

export interface IAlbumsState {
  lastPage?: number;
  list: IAlbum[];
  users: IUser[];
}
