import { History } from "history";

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

export type QueryField = "q" | "_limit" | "_page" | "_q" | "_order";

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
  const arrData: string[] = linkHeader.split(",");
  const lastLinkRel = arrData.find((item) => item.includes('rel="last"'));
  if (lastLinkRel) {
    // couldn't find a better way receive last page indicator
    const lastLinkUrl = lastLinkRel.slice(
      lastLinkRel.indexOf("<") + 1,
      lastLinkRel.indexOf('>; rel="last"'),
    );
    return new URLSearchParams(lastLinkUrl).get("_page");
  }
};

export { debounce, setQueryParam, getLastPageFromLinkRel };
