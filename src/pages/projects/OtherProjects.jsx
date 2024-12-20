import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../constants/apiURL";
import { BASE_API_KEY } from "../../constants/apiURL";
import axios from "axios";
import CardProject from "../../components/Project/CardProject";

const OtherProjects = () => {
  const [projects, setProjects] = useState([]);

  const fetchOtherProjects = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/semua-projects`, {
        headers: {
          "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      setProjects(await response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchOtherProjects();
  }, []);

  return (
    <>
      {projects?.map((p, i) => {
        if (i < 4) {
          return (
            <CardProject
              key={i}
              title={p.judul}
              image={`${BASE_API_URL}/storage/${p.gambar_utama}`}
              category={p.kategori.judul_kategori}
              link={`/projects/${p.kategori.slug}/${p.slug}`}
            />
          );
        }
      })}
    </>
  );
};

export default OtherProjects;
