import { IRootState } from "store/types";

const getAlbums = ({ albums }: IRootState) => albums.list;

const getUsers = ({ albums }: IRootState) => albums.users;

export { getAlbums, getUsers };
