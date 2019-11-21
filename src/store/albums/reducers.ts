import initialState from "./initial";
import {
  AlbumsActionType,
  IAlbumsAction,
  IAlbumsState,
  IReceiveAlbumsAction,
  IReceiveUsersAction,
} from "./types";

const albums = (state = initialState, action: IAlbumsAction): IAlbumsState => {
  const receiveAlbums = (): IAlbumsState => ({
    ...state,
    list: (action as IReceiveAlbumsAction).payload.albums,
  });

  const receiveUsers = (): IAlbumsState => ({
    ...state,
    users: (action as IReceiveUsersAction).payload.users,
  });

  switch (action.type) {
    case AlbumsActionType.RECEIVE_ALBUMS:
      return receiveAlbums();

    case AlbumsActionType.RECEIVE_USERS:
      return receiveUsers();

    default:
      return state;
  }
};

export { initialState };
export default albums;
