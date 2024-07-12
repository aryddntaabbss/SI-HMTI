import React, { useEffect, useState } from 'react'
import { BASE_API_URL } from '../../constants/apiURL';
import axios from 'axios';
import CardProject from '../../components/Project/CardProject';

const OtherProjects = () => {
  const [projects, setProjects] = useState([])

  const fetchOtherProjects = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/semua-projects`);
      setProjects(await response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchOtherProjects();
  }, [])

  return (
    <>
      {projects?.map((p, i) => {
        if (i < 4) {
          return (
            <CardProject
              title={p.judul}
              image={`${BASE_API_URL}/storage/${p.gambar_utama}`}
              category={p.kategori.judul_kategori}
            />)
        }
      }
      )
      }
    </>
  )
}

export default OtherProjects