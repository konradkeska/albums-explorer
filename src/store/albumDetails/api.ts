import apiInstance from "axiosConfig";

import { IAlbum, IPhoto, IPost, IUser } from "store/types";

const loadAlbum = async (id: number) =>
  apiInstance.get<IAlbum>(`/albums/${id}`);

const loadAlbumPhotos = async (id: number) =>
  apiInstance.get<IPhoto[]>(`/photos?albumId=${id}&_page=1&_limit=5`);

const loadAlbumUser = async (id: number) =>
  apiInstance.get<IUser>(`/users/${id}`);

const loadAlbumUserPosts = async (id: number) =>
  apiInstance.get<IPost[]>(`/users/${id}/posts`);

export { loadAlbum, loadAlbumPhotos, loadAlbumUser, loadAlbumUserPosts };
