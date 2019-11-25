import { IAlbumDetailsState } from "./types";

const initialState: IAlbumDetailsState = {
  album: {
    id: 0,
    title: "",
    userId: 0,
  },
  photos: [],
  user: {
    address: {
      city: "",
      geo: {
        lat: "",
        lng: "",
      },
      street: "",
      suite: "",
      zipcode: "",
    },
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
    email: "",
    id: 0,
    name: "",
    phone: "",
    username: "",
    website: "",
  },
  userPosts: [],
};

export default initialState;
