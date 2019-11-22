import initialState from "./initial";
import {
  AlbumDetailsActionType,
  IAlbumDetailsState,
  IAlbumsAction,
  IReceiveAlbumAction,
  IReceivePhotosAction,
  IReceiveUserAction,
  IReceiveUserPostsAction,
} from "./types";

const albumDetails = (
  state = initialState,
  action: IAlbumsAction,
): IAlbumDetailsState => {
  const receiveAlbum = (): IAlbumDetailsState => ({
    ...state,
    album: (action as IReceiveAlbumAction).payload.album,
  });

  const receivePhotos = (): IAlbumDetailsState => ({
    ...state,
    photos: (action as IReceivePhotosAction).payload.photos,
  });

  const receiveUser = (): IAlbumDetailsState => ({
    ...state,
    user: (action as IReceiveUserAction).payload.user,
  });

  const receiveUserPosts = (): IAlbumDetailsState => ({
    ...state,
    userPosts: (action as IReceiveUserPostsAction).payload.userPosts,
  });

  switch (action.type) {
    case AlbumDetailsActionType.RECEIVE_ALBUM:
      return receiveAlbum();

    case AlbumDetailsActionType.RECEIVE_PHOTOS:
      return receivePhotos();

    case AlbumDetailsActionType.RECEIVE_USER:
      return receiveUser();

    case AlbumDetailsActionType.RECEIVE_USER_POSTS:
      return receiveUserPosts();

    default:
      return state;
  }
};

export { initialState };
export default albumDetails;
