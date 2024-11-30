import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { Link, useParams } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";
import { BASE_API_KEY } from "../../constants/apiURL";
import OtherProjects from "./OtherProjects";
import BounceLoading from "../../utils/BounceLoading";
import NotFound from "../../components/NotFound";

const DetailProject = () => {
  const { slug: projectSlug, kategori: kategoris } = useParams();
  const [project, setProject] = useState(null); // Defaulting project to null
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to fetch project data
  const fetchProject = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/project/${projectSlug}`,
        {
          headers: {
            "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.data;
      setProject(result);

      // Check if project kategori matches the param kategori
      if (kategoris !== result.kategori.slug) {
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
      setError(true);
    }
    setLoading(false);
  };

  // Trigger fetchProject when component mounts or params change
  useEffect(() => {
    fetchProject();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [projectSlug, kategoris]);

  return (
    <GuestLayout>
      {loading ? (
        <BounceLoading />
      ) : error ? (
        <NotFound
          msg="Sepertinya project yang anda cari tidak ditemukan."
          btnText="Kembali ke Projects"
          btnLink="/projects"
        />
      ) : (
        <div className="w-full px-3 py-10 lg:px-24">
          <div className="flex gap-1 items-center text-xs md:text-base">
            <Link to="/projects" className="text-good-blue">
              Projects
            </Link>
            <FaAngleRight className="text-gray-400" />
            <span className="text-gray-500">{project.title}</span>
          </div>

          <div className="my-6">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <p className="text-gray-700 mt-3">{project.description}</p>
          </div>

          {/* Project Details */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="w-full">
              <img
                src={`${BASE_API_URL}/storage/${project.image}`}
                alt={project.title}
                className="object-cover w-full h-80 rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Details:</h3>
              <p>{project.details}</p>
            </div>
          </div>

          {/* Other Projects */}
          <OtherProjects currentCategory={project.kategori.slug} />
        </div>
      )}
    </GuestLayout>
  );
};

export default DetailProject;
