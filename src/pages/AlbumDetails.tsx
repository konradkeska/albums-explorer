import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import * as selectors from "store/albumDetails/selectors";
import * as services from "store/albumDetails/services";
import { IAlbum, IPhoto, IPost, IRootState, IUser } from "store/types";

import DetailRow from "shared/DetailRow";
import Lightbox from "shared/Lightbox";
import Navigation from "shared/Navigation";
import Photo from "shared/Photo";
import Spinner from "shared/Spinner";

interface IActionsProps {
  loadDetails: (albumId: number) => void;
}

interface IConnectedProps {
  album: IAlbum;
  user: IUser;
  photos: IPhoto[];
  userPosts: IPost[];
}

type Props = IActionsProps & IConnectedProps;

const ALBUM_DETAILS_PRELOAD_TIMEOUT = 1000;

const AlbumDetails: React.FC<Props> = ({
  album,
  user,
  photos,
  userPosts,
  loadDetails,
}) => {
  const { id } = useParams();
  const [lightboxImage, setLightboxImage] = useState<IPhoto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadDetails(Number(id));
    setTimeout(() => setLoading(false), ALBUM_DETAILS_PRELOAD_TIMEOUT);
  }, [loadDetails, id]);

  const openLightbox = (image: IPhoto) => () => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  const PhotosGrid =
    photos &&
    photos.map((photo) => (
      <Photo onClick={openLightbox} key={photo.id} photo={photo} />
    ));

  const UserDetailsList = (
    <ul className="list">
      <DetailRow value={user.name} label="name" />
      <DetailRow value={user.email} label="email" />
      <DetailRow value={user.phone} label="phone" />
      <DetailRow value={user.website} label="website" />
    </ul>
  );

  const UserPostsList = (
    <ul className="list">
      {userPosts &&
        userPosts.map((item) => (
          <li className="list__item" key={item.id}>
            <article>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          </li>
        ))}
    </ul>
  );

  const LightboxComponent = lightboxImage && (
    <Lightbox image={lightboxImage && lightboxImage} onClose={closeLightbox} />
  );

  const DetailsComponent = (
    <>
      <section className="album">
        <h5 className="sub-title">Album title</h5>
        <h1 className="uppercase">{album.title}</h1>
      </section>
      <section className="photos">{PhotosGrid}</section>
      <section className="posts">
        <h5 className="sub-title">Recent posts</h5>
        {UserPostsList}
      </section>
      <section className="user">
        <h5 className="sub-title">About author</h5>
        {UserDetailsList}
      </section>
    </>
  );

  return (
    <>
      {loading ? <Spinner /> : DetailsComponent}
      <Navigation />
      {LightboxComponent}
    </>
  );
};

const mapDispatchToProps = {
  loadDetails: services.loadDetails,
};

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  album: selectors.getAlbum(state),
  photos: selectors.getPhotos(state),
  user: selectors.getUser(state),
  userPosts: selectors.getUserPosts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetails);
