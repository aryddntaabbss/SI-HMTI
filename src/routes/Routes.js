import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Beranda from "../pages/beranda/Beranda";
import Berita from "../pages/berita/Berita";
import DetailBerita from "../pages/berita/DetailBerita";
import { Biografi, VisiMisi, Struktur } from "../pages/profile/Index";
import Galery from "../pages/galery/Galery";
import AllGalery from "../pages/galery/AllGalery";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import DetailProject from "../pages/projects/DetailProject";
import SearchBerita from "../pages/berita/SearchBerita";
import ComingSoon from './../pages/ComingSoon';
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () =>
{
	return (
		<Router>
			<Routes>
				{/*** General Route ***/ }
				<Route path="/" element={ <Beranda /> } />
				<Route path="/berita" element={ <Navigate to="/berita/kategori/semua-berita" /> } />
				<Route path="/berita/kategori/:kategoriBerita" element={ <Berita /> } />
				<Route path="/berita/cari/:slug" element={ <SearchBerita /> } />
				<Route path="/berita/:slug" element={ <DetailBerita /> } />

				<Route path="/profile" element={ <Navigate to="/profile/biografi" /> } />
				<Route path="/profile/biografi" element={ <Biografi /> } />
				<Route path="/profile/struktur" element={ <Struktur /> } />
				<Route path="/profile/visi-misi" element={ <VisiMisi /> } />

				<Route path="/galery" element={ <Galery /> } />
				<Route path="/kenangan" element={ <AllGalery /> } />
				<Route path="/projects" element={ <Projects /> } />
				<Route path="/projects/:kategori/:slug" element={ <DetailProject /> } />
				<Route path="/contact" element={ <Contact /> } />

				<Route path="/event" element={ <ComingSoon /> } />
				<Route path="/*" element={ <NotFoundPage /> } />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
