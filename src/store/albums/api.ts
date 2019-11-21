import apiInstance from "axiosConfig";

import { IAlbum, IPagination, IUser } from "store/types";

const loadAlbums = async (pagination: Partial<IPagination>) => {
  const currentUrlParams = new URLSearchParams(window.location.search);
  return apiInstance.get<IAlbum[]>(
    `${window.location.pathname}?${currentUrlParams.toString()}`,
  );
};

const loadUsers = async () => apiInstance.get<IUser[]>(`/users`);

export { loadAlbums, loadUsers };
