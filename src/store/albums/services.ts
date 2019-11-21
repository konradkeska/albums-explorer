import * as actions from "./actions";
import * as api from "./api";

import { ApiAction, IPagination } from "store/types";
import { IReceiveAlbumsAction, IReceiveUsersAction } from "./types";

const loadAlbums = (
  pagination: Partial<IPagination>,
): ApiAction<IReceiveAlbumsAction> => async (dispatch) => {
  const { data } = await api.loadAlbums(pagination);
  dispatch(actions.receiveAlbums(data));
};

const loadUsers = (): ApiAction<IReceiveUsersAction> => async (dispatch) => {
  const { data } = await api.loadUsers();
  dispatch(actions.receiveUsers(data));
};

export { loadAlbums, loadUsers };
