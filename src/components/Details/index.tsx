import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import * as selectors from "store/albumDetails/selectors";
import { IAlbum, IPhoto, IPost, IRootState, IUser } from "store/types";

import NavButton from "components/NavButton";

import Album from "./Album";
import PhotosGrid from "./PhotosGrid";
import UserDetails from "./UserDetailsList";
import UserPostsList from "./UserPostsList";

import eng from "lang/eng";

import "../Pagination/Pagination.scss";
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
}) => {
  const { goBack } = useHistory();
  const handleBack = () => goBack();
  return (
    <>
      <Album album={album} />
      <PhotosGrid photos={photos} onPhotoClick={onPhotoClick} />
      <UserPostsList userPosts={userPosts} />
      <UserDetails user={user} />
      <nav className="page-nav">
        <NavButton onClick={handleBack} isActive={true} label={eng.GO_BACK} />
      </nav>
    </>
  );
};

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  album: selectors.getAlbum(state),
  photos: selectors.getPhotos(state),
  user: selectors.getUser(state),
  userPosts: selectors.getUserPosts(state),
});

export default connect(mapStateToProps, {})(Details);
