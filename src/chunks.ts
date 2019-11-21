import { lazy } from "react";

const Albums = lazy(() => import("./components/Albums"));
const AlbumDetails = lazy(() => import("./components/AlbumDetails"));

export { Albums, AlbumDetails };
