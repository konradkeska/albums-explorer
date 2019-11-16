import {
  AlbumsActionType,
  IAlbumsAction,
  IAlbumsState,
  IReceiveAlbumsAction,
} from "./types";

const initialState: IAlbumsState = {
  list: [],
};

const albums = (state = initialState, action: IAlbumsAction): IAlbumsState => {
  const receiveAlbums = (): IAlbumsState => ({
    ...state,
    list: (action as IReceiveAlbumsAction).payload.albums,
  });

  switch (action.type) {
    case AlbumsActionType.RECEIVE_ALBUMS:
      return receiveAlbums();

    default:
      return state;
  }
};

export { initialState };
export default albums;
