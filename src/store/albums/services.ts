import * as actions from "./actions";
import * as api from "./api";

import { ApiAction } from "store/types";
import { LoadAlbumsActions } from "./types";

const loadAlbums = (): ApiAction<LoadAlbumsActions> => async (dispatch) => {
  const [{ data: albumsData }, { data: usersData }] = await Promise.all([
    api.loadAlbums(),
    api.loadUsers(),
  ]);
  dispatch(actions.receiveAlbums(albumsData));
  dispatch(actions.receiveUsers(usersData));
};

export { loadAlbums };
