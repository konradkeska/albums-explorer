import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";

import * as selectors from "store/albums/selectors";
import * as services from "store/albums/services";
import { IAlbum, IRootState, IUser } from "store/types";

import Filters, { IFilter } from "components/Filters";
import NoResults from "components/NoResults";
import Pagination from "components/Pagination";
import Spinner from "components/Spinner";
import Tile from "components/Tile";

import { setQueryParam } from "utils/helpers";

import eng from "lang/eng";

interface IActionsProps {
  loadAlbums: () => void;
}

interface IConnectedProps {
  albums: IAlbum[];
  users: IUser[];
  lastPage?: number;
}

type Props = IActionsProps & IConnectedProps;

const ALBUMS_PRELOAD_TIMEOUT = 1000;

const Albums: React.FC<Props> = ({ albums, users, loadAlbums, lastPage }) => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);

  const currentUrlParams = new URLSearchParams(location.search);
  const currentUrlParamsString = currentUrlParams.toString();

  useEffect(() => {
    loadAlbums();
    setTimeout(() => setLoading(false), ALBUMS_PRELOAD_TIMEOUT);
  }, [loadAlbums, currentUrlParamsString]);

  const FILTER_ITEMS = [
    {
      defaultValue: Number(currentUrlParams.get("_limit")) || 100,
      label: eng.RESULTS,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoading(true);
        setQueryParam("_limit", e.currentTarget.value, history);
        setQueryParam("_page", "1", history);
      },
      options: [5, 10, 20, 50, 100],
    } as IFilter<number>,
  ];

  const getAlbumUser = (userId: number) =>
    users
      .filter((item) => item.id === userId)!!
      .map((item) => `${item.name} ${item.username}`)[0] || "-";

  const hasResults = albums && albums.length > 0;

  const Results = hasResults ? (
    albums.map((album) => (
      <Tile key={album.id} album={album} user={getAlbumUser(album.userId)} />
    ))
  ) : (
    <NoResults />
  );

  return loading ? (
    <Spinner />
  ) : (
    <>
      {hasResults && <Filters items={FILTER_ITEMS} />}
      <section className="results">{Results}</section>
      {hasResults && <Pagination setLoading={setLoading} lastPage={lastPage} />}
    </>
  );
};

const mapDispatchToProps = {
  loadAlbums: services.loadAlbums,
};

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  albums: selectors.getAlbums(state),
  users: selectors.getUsers(state),
  lastPage: selectors.getLastPage(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);