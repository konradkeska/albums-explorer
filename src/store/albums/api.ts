import apiInstance from "axiosConfig";

import { IAlbum, IUser } from "store/types";

const loadAlbums = async () => {
  const currentUrlParams = new URLSearchParams(window.location.search);
  return apiInstance.get<IAlbum[]>(`/albums?${currentUrlParams.toString()}`);
};

const loadUsers = async () => apiInstance.get<IUser[]>(`/users`);

export { loadAlbums, loadUsers };
