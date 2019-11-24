import { useLocation } from "react-router";

import { QueryField } from "store/types";

const useQueryParam = (param: QueryField) => {
  const location = useLocation();
  const currentUrlParams = new URLSearchParams(location.search);
  const paramValue = currentUrlParams.get(param) || "";
  return [paramValue, currentUrlParams];
};

export { useQueryParam };
