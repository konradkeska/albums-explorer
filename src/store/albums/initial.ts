import { IAlbumsState } from "./types";

const initialState: IAlbumsState = {
  list: [],
  pagination: {
    limit: 10,
    order: "asc",
    page: 1,
  },
  users: [],
};

export default initialState;
