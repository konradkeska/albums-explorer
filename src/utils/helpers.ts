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

const appendQueryParams = (queryString: string, history: History) =>
  queryString
    ? history.push(`${window.location.pathname}?${queryString}`)
    : history.push(`${window.location.pathname}`);

const setQueryParam = (field: QueryField, value: string, history: History) => {
  const currentUrlParams = new URLSearchParams(window.location.search);
  currentUrlParams.set(field, value);
  const queryString = currentUrlParams.toString();
  appendQueryParams(queryString, history);
};

const getRel = (linkHeader: string, relName: string) =>
  linkHeader.split(",").find((rel) => rel.includes(`rel="${relName}"`));

const getRelUrl = (rel: string, relName: string) =>
  rel.slice(rel.indexOf("<") + 1, rel.indexOf(`>; rel="${relName}"`));

const getUrlParamValue = (url: string, param: string) =>
  new URL(url).searchParams.get(param);

const getRelParamValue = (rel: string, relName: string, param: string) => {
  const requestUrl: string = getRelUrl(rel, relName);
  return getUrlParamValue(requestUrl, param);
};

const getLastPage = (linkHeader: string) => {
  const lastPageRel = getRel(linkHeader, "last");
  return lastPageRel ? getRelParamValue(lastPageRel, "last", "_page") : "1";
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
  const hasQueryString = window.location.href.includes(queryString);

  if (!hasQueryString) {
    window.location.href = `${window.location}?${queryString}`;
  }
};

const handleDefaultQueryParams = (res: AxiosResponse<IAlbum[]>) => {
  const url: string = (res && res.request && res.request.responseURL) || "";
  url && receiveDefaultQueryParams(url);
  return res;
};

export {
  debounce,
  setQueryParam,
  getLastPage,
  disableScrolling,
  enableScrolling,
  scrollToTop,
  receiveDefaultQueryParams,
  handleDefaultQueryParams,
};
