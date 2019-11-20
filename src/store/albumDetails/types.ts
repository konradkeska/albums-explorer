import { IAlbum, IPhoto, IPost, IUser } from "store/types";

export enum AlbumDetailsActionType {
  RECEIVE_ALBUM = "albumDetails/receive_album",
  RECEIVE_PHOTOS = "albumDetails/receive_photos",
  RECEIVE_USER = "albumDetails/receive_user",
  RECEIVE_USER_POSTS = "albumDetails/receive_user_posts",
}

export interface IAlbumsAction {
  type: AlbumDetailsActionType;
}

export interface IReceiveAlbumAction extends IAlbumsAction {
  payload: { album: IAlbum };
  type: AlbumDetailsActionType.RECEIVE_ALBUM;
}

export interface IReceivePhotosAction extends IAlbumsAction {
  payload: { photos: IPhoto[] };
  type: AlbumDetailsActionType.RECEIVE_PHOTOS;
}

export interface IReceiveUserAction extends IAlbumsAction {
  payload: { user: IUser };
  type: AlbumDetailsActionType.RECEIVE_USER;
}

export interface IReceiveUserPostsAction extends IAlbumsAction {
  payload: { userPosts: IPost[] };
  type: AlbumDetailsActionType.RECEIVE_USER_POSTS;
}

export interface IAlbumDetailsState {
  album: IAlbum;
  photos: IPhoto[];
  user: IUser;
  userPosts: IPost[];
}
