import React from "react";
import { connect } from "react-redux";

import * as selectors from "store/albumDetails/selectors";
import { IAlbum, IPhoto, IPost, IRootState, IUser } from "store/types";

import PhotosGrid from "./PhotosGrid";
import UserDetails from "./UserDetailsList";
import UserPostsList from "./UserPostsList";

import eng from "lang/eng";

import "./index.scss";

interface IConnectedProps {
  album: IAlbum;
  user: IUser;
  photos: IPhoto[];
  userPosts: IPost[];
}

interface IProps {
  onPhotoClick: (image: IPhoto) => () => void;
}

type Props = IConnectedProps & IProps;

const Details: React.FC<Props> = ({
  photos,
  album,
  user,
  userPosts,
  onPhotoClick,
}) => (
  <>
    <section className="album">
      <h5 className="sub-title">{eng.ALBUM_TITLE}</h5>
      <h1 className="uppercase">{album.title}</h1>
    </section>
    <section className="photos">
      <PhotosGrid photos={photos} onPhotoClick={onPhotoClick} />
    </section>
    <section className="posts full-width">
      <h5 className="sub-title">{eng.RECENT_POSTS}</h5>
      <UserPostsList userPosts={userPosts} />
    </section>
    <section className="user full-width">
      <h5 className="sub-title">{eng.ABOUT_AUTHOR}</h5>
      <UserDetails user={user} />
    </section>
  </>
);

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  album: selectors.getAlbum(state),
  photos: selectors.getPhotos(state),
  user: selectors.getUser(state),
  userPosts: selectors.getUserPosts(state),
});

export default connect(mapStateToProps, {})(Details);
