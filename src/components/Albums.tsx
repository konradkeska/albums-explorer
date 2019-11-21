import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as selectors from "store/albums/selectors";
import * as services from "store/albums/services";
import { IAlbum, IPagination, IRootState, IUser } from "store/types";

import Filters, { IFilter } from "shared/Filters";
import ListTile from "shared/ListTile";
import Pagination from "shared/Pagination";
import { useHistory } from "react-router";
import { setQueryParam } from "utils/helpers";

interface IActionsProps {
  loadAlbums: (pagination: Partial<IPagination>) => void;
  loadUsers: () => void;
}

interface IConnectedProps {
  albums: IAlbum[];
  users: IUser[];
  pagination: Partial<IPagination>;
}

type Props = IActionsProps & IConnectedProps;

const Albums: React.FC<Props> = ({
  albums,
  users,
  pagination,
  loadAlbums,
  loadUsers,
}) => {
  const history = useHistory();
  const currentUrlParams = new URLSearchParams(window.location.search);
  const currentUrlParamsString = currentUrlParams.toString();

  useEffect(() => {
    loadAlbums(pagination);
    loadUsers();
  }, [loadAlbums, loadUsers, pagination, currentUrlParamsString]);

  const FILTER_ITEMS = [
    {
      label: "results",
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQueryParam("_limit", e.currentTarget.value, history);
      },
      options: [5, 10, 20, 50, 100],
    } as IFilter<number>,
    {
      label: "order",
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQueryParam("_order", e.currentTarget.value, history);
      },
      options: ["asc", "desc"],
    } as IFilter<"asc" | "desc">,
  ];

  const getAlbumUser = (userId: number) =>
    users
      .filter((item) => item.id === userId)!!
      .map((item) => `${item.name} ${item.username}`)[0] || "-";

  const Results = albums.map((album, index) => (
    <ListTile
      key={album.id}
      album={album}
      index={index}
      user={getAlbumUser(album.userId)}
    />
  ));

  return (
    <>
      <Filters items={FILTER_ITEMS} />
      <section className="results">{Results}</section>
      <Pagination />
    </>
  );
};

const mapDispatchToProps = {
  loadAlbums: services.loadAlbums,
  loadUsers: services.loadUsers,
};

const mapStateToProps = (state: IRootState): IConnectedProps => ({
  albums: selectors.getAlbums(state),
  pagination: selectors.getPagination(state),
  users: selectors.getUsers(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
