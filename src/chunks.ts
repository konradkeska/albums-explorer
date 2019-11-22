import { lazy } from "react";

const Albums = lazy(() => import("./pages/Albums"));
const AlbumDetails = lazy(() => import("./pages/AlbumDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export { Albums, AlbumDetails, PageNotFound };
