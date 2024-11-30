import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_API_URL, BASE_API_KEY } from "../../constants/apiURL";
import { Link } from "react-router-dom";
import AOS from "aos";

const ProjectList = ({ slug }) => {
  const [projects, setProjects] = useState([]); // Renamed `project` to `projects` for clarity
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for error handling

  // Fetch Projects from the API
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/kategori/${slug}/projects`,
        {
          headers: {
            "P3RT-HMTI-API-KEY": BASE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      setProjects(response.data); // Directly set data to `projects`
    } catch (error) {
      setError("Failed to load projects."); // Set error message
      console.error("Error:", error); // Log error for debugging
    }
    setLoading(false); // Always set loading to false after fetching
  };

  useEffect(() => {
    fetchProjects(); // Fetch projects when component mounts
    AOS.init({
      duration: 1500, // Set duration for animations
    });
  }, [slug]); // Only refetch when `slug` changes

  return (
    <>
      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="pt-4 pb-12 grid grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-5">
          {projects.length ? (
            projects.map((p, i) => (
              <div key={i} data-aos="fade-up">
                <div className="w-32 h-32 md:w-64 md:h-40 bg-cover bg-center rounded-xl my-3 overflow-hidden">
                  <Link to={`/projects/${p.kategori.slug}/${p.slug}`}>
                    <img
                      src={`${BASE_API_URL}/storage/${p.gambar_utama}`}
                      alt={`gambar-project-${p.slug}`}
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
            ))
          ) : (
            <div>COMMING SOON !!!</div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectList;
