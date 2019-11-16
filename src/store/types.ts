import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IAlbumsState } from "./albums/types";

export interface IRootState {
  albums: IAlbumsState;
}

export type ApiAction<T extends Action<any>> = ThunkAction<
  void,
  IRootState,
  null,
  T
>;
