import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ComingSoon from "../pages/ComingSoon.jsx";

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
        <Route path="/berita" element={ <Berita /> } />
        <Route path="/berita/:slug" element={ <DetailBerita /> } />

        <Route path="/profile/biografi" element={ <Biografi /> } />
        <Route path="/profile/struktur" element={ <Struktur /> } />
        <Route path="/profile/visi-misi" element={ <VisiMisi /> } />

        <Route path="/galery" element={ <Galery /> } />
        <Route path="/contact" element={ <Contact /> } />

        <Route path="/comingsoon" element={ <ComingSoon /> } />


      </Routes>
    </Router>
  );
};

export default AppRoutes;

