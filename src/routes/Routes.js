import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Beranda from "../pages/beranda/Beranda";
import Berita from "../pages/berita/Berita";
import DetailBerita from "../pages/berita/DetailBerita";
import SignIN from "../pages/auth/SignIN";
import EmailVerification from "../pages/auth/EmailVerification";
import OtpVerification from "../pages/auth/OtpVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import { Biografi, VisiMisi, Struktur } from "../pages/profile/Index.jsx";
import Galery from "../pages/galery/Galery";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects.jsx";
import DetailProject from "../pages/projects/DetailProject.jsx";
import SearchBerita from "../pages/berita/SearchBerita.jsx";
import ComingSoon from './../pages/ComingSoon';

const AppRoutes = () =>
{
	return (
		<Router>
			<Routes>
				{/*** General Route ***/ }

				<Route path="/sign-in" element={ <SignIN /> } />
				<Route path="/email-verification" element={ <EmailVerification /> } />
				<Route path="/otp-verification" element={ <OtpVerification /> } />
				<Route path="/reset-password" element={ <ResetPassword /> } />
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
				<Route path="/projects" element={ <Projects /> } />
				<Route path="/projects/:kategori/:slug" element={ <DetailProject /> } />
				<Route path="/contact" element={ <Contact /> } />

				<Route path="/event" element={ <ComingSoon /> } />

			</Routes>
		</Router>
	);
};

export default AppRoutes;
