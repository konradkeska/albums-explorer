import { IAlbum, IPhoto, IPost, IUser } from "store/types";
import {
  AlbumDetailsActionType,
  IReceiveAlbumAction,
  IReceivePhotosAction,
  IReceiveUserAction,
  IReceiveUserPostsAction,
} from "./types";

const receiveAlbum = (album: IAlbum): IReceiveAlbumAction => ({
  payload: { album },
  type: AlbumDetailsActionType.RECEIVE_ALBUM,
});

const receivePhotos = (photos: IPhoto[]): IReceivePhotosAction => ({
  payload: { photos },
  type: AlbumDetailsActionType.RECEIVE_PHOTOS,
});

const receiveUser = (user: IUser): IReceiveUserAction => ({
  payload: { user },
  type: AlbumDetailsActionType.RECEIVE_USER,
});

const receiveUserPosts = (userPosts: IPost[]): IReceiveUserPostsAction => ({
  payload: { userPosts },
  type: AlbumDetailsActionType.RECEIVE_USER_POSTS,
});

export { receiveAlbum, receivePhotos, receiveUser, receiveUserPosts };
