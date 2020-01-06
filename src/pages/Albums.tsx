import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import * as selectors from "store/albums/selectors";
import * as services from "store/albums/services";
import { IAlbum, IRootState } from "store/types";

import Filters, { IFilter } from "components/Filters";
import NoResults from "components/NoResults";
import Pagination from "components/Pagination";
import Results from "components/Results";
import Spinner from "components/Spinner";

import { DEFAULT_LIST_QUERY } from "config/constants";
import { setQueryParam } from "utils/helpers";
import { useQueryParam } from "utils/hooks";

import eng from "lang/eng";

interface IActionsProps {
  loadAlbums: (
    queryString: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
}

interface IConnectedProps {
  albums: IAlbum[];
  lastPage?: number;
}

type Props = IActionsProps & IConnectedProps;

const Albums: React.FC<Props> = ({ albums, loadAlbums, lastPage }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();

  const [limitParam, currentUrlParams] = useQueryParam("_limit");
  const query = currentUrlParams.toString() || DEFAULT_LIST_QUERY;

  useEffect(() => {
    loadAlbums(query, setLoading);
  }, [loadAlbums, query]);

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

  const hasResults = albums?.length > 0;

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
