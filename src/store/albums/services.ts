import * as actions from "./actions";
import * as api from "./api";

import { ApiAction } from "store/types";
import { IReceiveAlbumsAction, IReceiveUsersAction } from "./types";

const loadAlbums = (): ApiAction<IReceiveAlbumsAction> => async (dispatch) => {
  const { data } = await api.loadAlbums();
  dispatch(actions.receiveAlbums(data));
};

const loadUsers = (): ApiAction<IReceiveUsersAction> => async (dispatch) => {
  const { data } = await api.loadUsers();
  dispatch(actions.receiveUsers(data));
};

export { loadAlbums, loadUsers };
