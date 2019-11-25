import apiInstance from "axiosConfig";

import { DEFAULT_LIST_QUERY } from "config/constants";
import { IAlbum, IUser } from "store/types";

const loadAlbums = async () => {
  const currentUrlParams = new URLSearchParams(window.location.search);
  const queryString = currentUrlParams.toString() || DEFAULT_LIST_QUERY;
  return apiInstance.get<IAlbum[]>(`/albums?${queryString}`);
};

const loadUsers = async () => apiInstance.get<IUser[]>(`/users`);

export { loadAlbums, loadUsers };
