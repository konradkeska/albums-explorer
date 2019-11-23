import { History } from "history";
import { QueryField } from "store/types";

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
  if (!value && !currentUrlParams.toString()) {
    history.push(`${window.location.pathname}`);
  } else {
    history.push(`${window.location.pathname}?${currentUrlParams.toString()}`);
  }
};

const getLastPageFromLinkRel = (linkHeader: string) => {
  const linkRels: string[] = linkHeader.split(",");
  const lastPageRel = linkRels.find((item) => item.includes('rel="last"'));
  if (lastPageRel) {
    const lastLinkUrl = lastPageRel.slice(
      lastPageRel.indexOf("<") + 1,
      lastPageRel.indexOf('>; rel="last"'),
    );
    return new URLSearchParams(lastLinkUrl).get("_page");
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

export {
  debounce,
  setQueryParam,
  getLastPageFromLinkRel,
  disableScrolling,
  enableScrolling,
};
