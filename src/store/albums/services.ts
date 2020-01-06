import { AxiosResponse } from "axios";

import * as actions from "./actions";
import * as api from "./api";

import { ApiAction, IAlbum } from "store/types";
import { LoadAlbumsActions } from "./types";

import { PRELOAD_TIMEOUT } from "config/constants";
import { getLastPage, handleDefaultQueryParams } from "utils/helpers";

const loadAlbums = (
  query: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
): ApiAction<LoadAlbumsActions> => async (dispatch) => {
  const receiveLastPage = (res: AxiosResponse<IAlbum[]>) => {
    const linkHeader: string = res?.headers?.link || "";
    const lastPage = getLastPage(linkHeader);
    lastPage && dispatch(actions.receiveLastPage(Number(lastPage)));
    return res;
  };

  const [{ data: albumsData }, { data: usersData }] = await Promise.all([
    api
      .loadAlbums(query)
      .then(handleDefaultQueryParams)
      .then(receiveLastPage),
    api.loadUsers(),
  ]);
  dispatch(actions.receiveAlbums(albumsData));
  dispatch(actions.receiveUsers(usersData));

  setTimeout(() => setLoading(false), PRELOAD_TIMEOUT);
};

export { loadAlbums };
