import apiInstance from "axiosConfig";

import { IAlbum, IPhoto, IPost, IUser } from "store/types";

const loadAlbum = async (albumId: number) =>
  apiInstance.get<IAlbum>(`/albums/${albumId}`);

const loadPhotos = async (albumId: number) =>
  apiInstance.get<IPhoto[]>(`/photos?albumId=${albumId}&_page=1&_limit=12`);

const loadUser = async (userId: number) =>
  apiInstance.get<IUser>(`/users/${userId}`);

const loadUserPosts = async (userId: number) =>
  apiInstance.get<IPost[]>(`/posts?userId=${userId}&_limit=2`);

export { loadAlbum, loadPhotos, loadUser, loadUserPosts };
