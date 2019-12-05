import apiInstance from "axiosConfig";

import { IAlbum, IUser } from "store/types";

const loadAlbums = async (queryString: string) =>
  apiInstance.get<IAlbum[]>(`/albums?${queryString}`);

const loadUsers = async () => apiInstance.get<IUser[]>(`/users`);

export { loadAlbums, loadUsers };
