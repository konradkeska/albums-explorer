import { History } from "history";

import { AxiosResponse } from "axios";
import { IAlbum, QueryField } from "store/types";

const debounce = (func: any = alert, timeout = 500) => {
  let timeoutId: any;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, timeout);
  };
};

const setQueryParam = (field: QueryField, value: string, history: History) => {
  const currentUrlParams = new URLSearchParams(window.location.search);
  currentUrlParams.set(field, value);
  const queryString = currentUrlParams.toString();

  if (queryString) {
    history.push(`${window.location.pathname}?${queryString}`);
  } else {
    history.push(`${window.location.pathname}`);
  }
};

const getLastPageFromLinkRel = (linkHeader: string) => {
  const linkRels: string[] = linkHeader.split(",");
  const lastPageRel = linkRels.find((item) => item.includes('rel="last"'));

  if (lastPageRel) {
    const lastPageLink: string = lastPageRel.slice(
      lastPageRel.indexOf("<") + 1,
      lastPageRel.indexOf('>; rel="last"'),
    );
    const lastPageLinkURL = new URL(lastPageLink);
    return lastPageLinkURL.searchParams.get("_page");
  }
};

const disableScrolling = () => {
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
};

const enableScrolling = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const receiveDefaultQueryParams = (url: string): void => {
  const { searchParams } = new URL(url);
  const [pageParam, limitParam] = [
    searchParams.get("_page"),
    searchParams.get("_limit"),
  ];
  pageParam && searchParams.set("_page", pageParam);
  limitParam && searchParams.set("_limit", limitParam);

  const queryString = searchParams.toString();

  if (!window.location.href.includes(queryString)) {
    window.location.href = `${window.location}?${queryString}`;
  }
};

const handleDefaultQueryParams = (res: AxiosResponse<IAlbum[]>) => {
  const url: string = res && res.request && res.request.responseURL;
  if (url) {
    receiveDefaultQueryParams(url);
  }
  return res;
};

export {
  debounce,
  setQueryParam,
  getLastPageFromLinkRel,
  disableScrolling,
  enableScrolling,
  scrollToTop,
  receiveDefaultQueryParams,
  handleDefaultQueryParams,
};
