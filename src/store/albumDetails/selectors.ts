import { IRootState } from "store/types";

const getAlbum = ({ albumDetails }: IRootState) => albumDetails.album;

const getPhotos = ({ albumDetails }: IRootState) => albumDetails.photos;

const getUser = ({ albumDetails }: IRootState) => albumDetails.user;

const getUserPosts = ({ albumDetails }: IRootState) => albumDetails.userPosts;

export { getAlbum, getPhotos, getUser, getUserPosts };
