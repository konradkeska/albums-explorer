import { IRootState } from "store/types";

const getAlbums = ({ albums }: IRootState) => albums.list;

const getUsers = ({ albums }: IRootState) => albums.users;

const getPagination = ({ albums }: IRootState) => albums.pagination;

export { getAlbums, getUsers, getPagination };
