import * as actions from "./actions";
import * as api from "./api";

import { ApiAction } from "store/types";
import { IReceiveAlbumsAction, IReceiveUsersAction } from "./types";

type AlbumsAction = IReceiveAlbumsAction | IReceiveUsersAction;

const loadAlbums = (): ApiAction<AlbumsAction> => async (dispatch) => {
  const [{ data: albumsData }, { data: usersData }] = await Promise.all([
    api.loadAlbums(),
    api.loadUsers(),
  ]);
  dispatch(actions.receiveAlbums(albumsData));
  dispatch(actions.receiveUsers(usersData));
};

export { loadAlbums };
