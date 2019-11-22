import { IRootState } from "store/types";

const getAlbums = ({ albums }: IRootState) => albums.list;

const getUsers = ({ albums }: IRootState) => albums.users;

const getLastPage = ({ albums }: IRootState) => albums.lastPage;

export { getAlbums, getUsers, getLastPage };
