import * as actions from "./actions";
import * as api from "./api";

import { ApiAction } from "store/types";
import { IReceiveAlbumsAction } from "./types";

const loadAlbums = (): ApiAction<IReceiveAlbumsAction> => async (dispatch) => {
  const { data } = await api.loadAlbums();
  dispatch(actions.receiveAlbums(data));
};

export { loadAlbums };
