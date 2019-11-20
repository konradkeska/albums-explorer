import * as actions from "./actions";
import * as api from "./api";

import { ApiAction } from "store/types";
import {
  IReceiveAlbumAction,
  IReceivePhotosAction,
  IReceiveUserAction,
  IReceiveUserPostsAction,
} from "./types";

const loadAlbum = (id: number): ApiAction<IReceiveAlbumAction> => async (
  dispatch,
) => {
  const { data } = await api.loadAlbum(id);
  dispatch(actions.receiveAlbum(data));
};

const loadPhotos = (id: number): ApiAction<IReceivePhotosAction> => async (
  dispatch,
) => {
  const { data } = await api.loadAlbumPhotos(id);
  dispatch(actions.receivePhotos(data));
};

const loadUser = (id: number): ApiAction<IReceiveUserAction> => async (
  dispatch,
) => {
  const { data } = await api.loadAlbumUser(id);
  dispatch(actions.receiveUser(data));
};

const loadUserPosts = (
  id: number,
): ApiAction<IReceiveUserPostsAction> => async (dispatch) => {
  const { data } = await api.loadAlbumUserPosts(id);
  dispatch(actions.receiveUserPosts(data));
};

export { loadAlbum, loadPhotos, loadUser, loadUserPosts };
