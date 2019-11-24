import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";

import * as selectors from "store/albums/selectors";
import * as services from "store/albums/services";
import { IAlbum, IRootState, IUser } from "store/types";

import Filters, { IFilter } from "components/Filters";
import NoResults from "components/NoResults";
import Pagination from "components/Pagination";
import Results from "components/Results";
import Spinner from "components/Spinner";

import { PRELOAD_TIMEOUT } from "config/constants";
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

const Albums: React.FC<Props> = ({ albums, users, loadAlbums, lastPage }) => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);

  const currentUrlParams = new URLSearchParams(location.search);
  const currentUrlParamsString = currentUrlParams.toString();
  const limitParam = currentUrlParams.get("_limit");

  useEffect(() => {
    loadAlbums();
    setTimeout(() => setLoading(false), PRELOAD_TIMEOUT);
  }, [loadAlbums, currentUrlParamsString]);

  const FILTER_ITEMS = [
    {
      defaultValue: Number(limitParam) || 100,
      label: eng.RESULTS,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoading(true);
        setQueryParam("_limit", e.currentTarget.value, history);
        setQueryParam("_page", "1", history);
      },
      options: [5, 10, 20, 50, 100],
    } as IFilter<number>,
  ];

  const hasResults = albums && albums.length > 0;

  return loading ? (
    <Spinner />
  ) : (
    <>
      {hasResults && <Filters items={FILTER_ITEMS} />}
      {hasResults ? <Results /> : <NoResults />}
      {hasResults && <Pagination setLoading={setLoading} lastPage={lastPage} />}
    </>
  );
};

const mapDispatchToProps = { loadAlbums: services.loadAlbums };

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  albums: selectors.getAlbums(state),
  lastPage: selectors.getLastPage(state),
  users: selectors.getUsers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
