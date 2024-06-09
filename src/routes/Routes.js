import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "../pages/beranda/Beranda";
import Berita from "../pages/berita/Berita";
import DetailBerita from "../pages/berita/DetailBerita";
import SignIN from "../pages/auth/SignIN";
import EmailVerification from "../pages/auth/EmailVerification";
import OtpVerification from "../pages/auth/OtpVerification";
import ResetPassword from "../pages/auth/ResetPassword";
import Struktur from "../pages/profile/Struktur";

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

        <Route path="/struktur" element={ <Struktur /> } />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
