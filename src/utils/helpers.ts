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

export { debounce, setQueryParam };
