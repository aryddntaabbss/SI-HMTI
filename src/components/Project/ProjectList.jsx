import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../constants/apiURL";
import { BASE_API_KEY } from "../../constants/apiURL";
import { Link } from "react-router-dom";
import AOS from "aos";

const ProjectList = ({ slug }) => {
  const [project, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/kategori/${slug}/projects`,
        {
          headers: {
            "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setProjects(await response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
    AOS.init({
      duration: 1500, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <>
      {project?.length ? (
        <div className="pt-4 pb-12 grid grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5">
          {project?.map((p, i) => {
            return (
              <div data-aos="fade-up" key={i}>
                <div className="w-32 h-32 md:w-64 md:h-40 bg-cover bg-center rounded-xl my-3 overflow-hidden">
                  <Link to={`/projects/${p.kategori.slug}/${p.slug}`}>
                    <img
                      src={`${BASE_API_URL}/storage/${p.gambar_utama}`}
                      alt="gambar-project"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <Link
                  to={`/projects/${p.kategori.slug}/${p.slug}`}
                  className="font-medium text-sm md:text-base hover:text-good-blue transition-all"
                >
                  {p.judul}
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="text-center italic font-medium py-10">
          {loading ? "Loading..." : "Coming Soon!"}
        </h3>
      )}
    </>
  );
};

export default ProjectList;
