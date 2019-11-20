import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { IAlbumDetailsState } from "./albumDetails/types";
import { IAlbumsState } from "./albums/types";

export interface IRootState {
  albums: IAlbumsState;
  albumDetails: IAlbumDetailsState;
}

export type ApiAction<T extends Action<any>> = ThunkAction<
  void,
  IRootState,
  null,
  T
>;

export interface IPagination {
  page: number;
  limit: number;
  query: string;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
