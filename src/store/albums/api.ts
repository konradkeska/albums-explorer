import apiInstance from "axiosConfig";

import { IAlbum, IUser } from "store/types";

const loadAlbums = async (query: string) =>
  apiInstance.get<IAlbum[]>(`/albums?${query}`);

const loadUsers = async () => apiInstance.get<IUser[]>(`/users`);

export { loadAlbums, loadUsers };
