import * as actions from "./actions";
import * as api from "./api";

import { ApiAction } from "store/types";
import { LoadAlbumsActions } from "./types";
import { getLastPageFromLinkRel } from "utils/helpers";

const loadAlbums = (): ApiAction<LoadAlbumsActions> => async (dispatch) => {
  const [{ data: albumsData }, { data: usersData }] = await Promise.all([
    api.loadAlbums().then((response) => {
      const linkHeader: string | undefined =
        response && response.headers && response.headers.link;

      if (linkHeader) {
        const arrData: string[] = linkHeader.split(",");
        const lastLinkRel = arrData.find((item) => item.includes('rel="last"'));
        if (lastLinkRel) {
          const lastPage = getLastPageFromLinkRel(lastLinkRel);
          lastPage && dispatch(actions.receiveLastPage(Number(lastPage)));
        }
      }
      return response;
    }),
    api.loadUsers(),
  ]);
  dispatch(actions.receiveAlbums(albumsData));
  dispatch(actions.receiveUsers(usersData));
};

export { loadAlbums };
