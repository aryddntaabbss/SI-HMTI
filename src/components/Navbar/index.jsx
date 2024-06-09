import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-28 bg-white dark:bg-dark-blue">
      <div className="flex gap-20">
        <h1>HMTI</h1>
        <nav>
          <ul className="flex gap-10 font-medium">
            <li>
              <Link to={"/"}>Beranda</Link>
            </li>
            <li>
              <Link to={"/profile/biografi"}>Profil</Link>
            </li>
            <li>
              <Link to={""}>Event</Link>
            </li>
            <li>
              <Link to={"/berita"}>Berita</Link>
            </li>
            <li>
              <Link to={"/galery"}>Galeri</Link>
            </li>
            <li>
              <Link to={""}>Projects</Link>
            </li>
            <li>
              <Link to={"/contact"}>Kontak Kami</Link>
            </li>
          </ul>
        </nav>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
