import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCalendar,
  faNewspaper,
  faImages,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="hidden lg:inline">Beranda</span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/profile/biografi"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faUser} />
          <span className="hidden lg:inline">Profil</span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/event"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faCalendar} />
          <span className="hidden lg:inline">Event</span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/berita/kategori/semua-berita"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faNewspaper} />
          <span className="hidden lg:inline">Berita</span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/galery"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faImages} />
          <span className="hidden lg:inline">Galeri</span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span className="hidden lg:inline">Projects</span>
        </NavLink>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500 text-2xl" : "text-dark-blue"
            } ${
              isActive ? "text-blue-500 text-2xl" : "dark:text-white"
            }  hover:text-blue-500`
          }
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="hidden lg:inline">Kontak</span>
        </NavLink>
      </div>
    </>
  );
};

export default NavList;
