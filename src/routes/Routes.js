import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import Beranda from "../pages/beranda/Beranda";
import Berita from "../pages/berita/Berita";
import DetailBerita from "../pages/berita/DetailBerita";
import SignIn from "../pages/auth/SignIn";

const AppRoutes = () => {
  // logic fetchTypeUser (admin & user)

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserType());
  // }, [dispatch]);

  return (
    <Router>
      <Routes>
        {/*** General Route ***/}

        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
        <Route path="/" element={<Beranda />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:slug" element={<DetailBerita />} />

        {/*** Private Route ***/}

        {/* <Route
          path="/"
          element={
            <PrivateRoute
              element={<Dashboard />}
              roles={["admin", "user"]}
            />
          }
        />
        <Route
          path="/data/projek"
          element={
            <PrivateRoute element={<Projek />} roles={["admin", "user"]} />
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
