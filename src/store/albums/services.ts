import { AxiosResponse } from "axios";

import * as actions from "./actions";
import * as api from "./api";

import { ApiAction, IAlbum } from "store/types";
import { LoadAlbumsActions } from "./types";

import { getLastPageFromLinkRel } from "utils/helpers";

const loadAlbums = (): ApiAction<LoadAlbumsActions> => async (dispatch) => {
  const receiveLastPage = (res: AxiosResponse<IAlbum[]>) => {
    const linkHeader: string = (res && res.headers && res.headers.link) || "";
    const lastPage = getLastPageFromLinkRel(linkHeader);
    lastPage && dispatch(actions.receiveLastPage(Number(lastPage)));
    return res;
  };

  const [{ data: albumsData }, { data: usersData }] = await Promise.all([
    api.loadAlbums().then(receiveLastPage),
    api.loadUsers(),
  ]);
  dispatch(actions.receiveAlbums(albumsData));
  dispatch(actions.receiveUsers(usersData));
};

export { loadAlbums };
