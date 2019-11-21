import { IAlbum, IUser } from "store/types";
import {
  AlbumsActionType,
  IReceiveAlbumsAction,
  IReceiveUsersAction,
} from "./types";

const receiveAlbums = (albums: IAlbum[]): IReceiveAlbumsAction => ({
  payload: { albums },
  type: AlbumsActionType.RECEIVE_ALBUMS,
});

const receiveUsers = (users: IUser[]): IReceiveUsersAction => ({
  payload: { users },
  type: AlbumsActionType.RECEIVE_USERS,
});

export { receiveAlbums, receiveUsers };
