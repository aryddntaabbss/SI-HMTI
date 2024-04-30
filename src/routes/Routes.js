import { createBrowserRouter } from "react-router-dom";
import Beranda from "../pages/beranda/Beranda";
import Berita from "../pages/berita/Berita";
import DetailBerita from "../pages/berita/DetailBerita";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/berita",
    element: <Berita/>,
  },
  {
    path: "/berita/:slug",
    element: <DetailBerita/>,
  },
]);
