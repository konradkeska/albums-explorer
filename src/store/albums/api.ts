import apiInstance from "axiosConfig";

import { IAlbum } from "store/types";

const loadAlbums = async () => apiInstance.get<IAlbum[]>(`/albums`);

export { loadAlbums };
