import { IAlbum, IUser } from "store/types";
import {
  AlbumsActionType,
  IReceiveAlbumsAction,
  IReceiveUsersAction,
  IReceiveLastPageAction,
} from "./types";

const receiveAlbums = (albums: IAlbum[]): IReceiveAlbumsAction => ({
  payload: { albums },
  type: AlbumsActionType.RECEIVE_ALBUMS,
});

const receiveUsers = (users: IUser[]): IReceiveUsersAction => ({
  payload: { users },
  type: AlbumsActionType.RECEIVE_USERS,
});

const receiveLastPage = (page: number): IReceiveLastPageAction => ({
  payload: { page },
  type: AlbumsActionType.RECEIVE_LAST_PAGE,
});

export { receiveAlbums, receiveUsers, receiveLastPage };
