import initialState from "./initial";
import {
  AlbumsActionType,
  IAlbumsAction,
  IAlbumsState,
  IReceiveAlbumsAction,
  IReceiveLastPageAction,
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

  const receiveLastPage = (): IAlbumsState => ({
    ...state,
    lastPage: (action as IReceiveLastPageAction).payload.page,
  });

  switch (action.type) {
    case AlbumsActionType.RECEIVE_ALBUMS:
      return receiveAlbums();

    case AlbumsActionType.RECEIVE_USERS:
      return receiveUsers();

    case AlbumsActionType.RECEIVE_LAST_PAGE:
      return receiveLastPage();

    default:
      return state;
  }
};

export { initialState };
export default albums;
