import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
  Store,
} from "redux";
import thunk from "redux-thunk";

import { IRootState } from "./types";

import albumDetails from "./albumDetails/reducers";
import albums from "./albums/reducers";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer: Reducer<IRootState, AnyAction> = combineReducers<IRootState>(
  {
    albumDetails,
    albums,
  },
);
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store: Store<IRootState> = createStore(rootReducer, enhancer);

export default store;
