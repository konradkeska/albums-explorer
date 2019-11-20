import { IAlbumDetailsState } from "./types";

const initialState: IAlbumDetailsState = {
  album: {
    id: 0,
    title: "",
    userId: 0,
  },
  photos: [],
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
  userPosts: [],
};

export default initialState;
