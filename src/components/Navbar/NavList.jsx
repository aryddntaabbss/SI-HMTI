import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <>
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
    </>
  );
};

export default NavList;
