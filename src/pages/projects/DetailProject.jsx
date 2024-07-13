import React, { useEffect, useState } from 'react'
import GuestLayout from '../../layouts/GuestLayout'
import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import axios from 'axios'
import { BASE_API_URL } from '../../constants/apiURL'
import OtherProjects from './OtherProjects'
import BounceLoading from '../../utils/BounceLoading'

const DetailProject = () => {
  const { slug: projectSlug, kategori: kategori } = useParams()
  const [project, setProject] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchProject = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await axios.get(`${BASE_API_URL}/api/project/${projectSlug}`);
      const result = await response.data
      setProject(result);
      if (kategori !== result.kategori.slug) {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProject()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [projectSlug, kategori])


  return (
    <GuestLayout>
      {loading ? (
        <BounceLoading />
      ) : error ? (
        <div className='flex flex-col gap-3 justify-center items-center min-h-[90vh]'>
          <p className='text-5xl font-bold'>404</p>
          <h1 className='text-center text-lg'>Woops! Sepertinya project yang anda cari tidak ditemukan!</h1>
          <Link to={'/projects'} className='text-center text-lg font-semibold text-good-blue'>Kembali ke halaman projects</Link>
        </div>
      ) : (
        <div className=" w-full px-3 py-10 lg:px-24">
          <div className='flex gap-1 items-center text-xs md:text-base'>
            <Link to={'/projects'} className='text-good-blue font-semibold'>Projects</Link>
            <FaAngleRight className='text-dark-blue dark:text-white' />
            <p className='text-good-blue font-semibold'>{project?.kategori.judul_kategori}</p>
            <FaAngleRight className='text-dark-blue dark:text-white' />
            <p className='text-dark-blue dark:text-white font-semibold'>{project?.judul}</p>
          </div>

          <h1 className='mt-20 text-2xl font-semibold'>{project?.judul}</h1>
          <p className='text-good-blue font-semibold mt-10'>Creators</p>
          <p className='font-medium mb-5'>{project?.pembuat}</p>

          <div className='w-full h-[250px] md:h-[600px] overflow-hidden rounded-xl'>
            <img className='w-full h-full object-cover'
              src={`${BASE_API_URL}/storage/${project?.gambar_utama}`} alt="" />
          </div>
          <div className='grid grid-cols-4 h-20 md:h-64 mt-2 md:mt-5 gap-2 md:gap-4'>
            <div className='w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover'
                src={`${BASE_API_URL}/storage/${project?.gambar1}`} alt="" />
            </div>
            <div className='w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover'
                src={`${BASE_API_URL}/storage/${project?.gambar2}`} alt="" />
            </div>
            <div className='w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover'
                src={`${BASE_API_URL}/storage/${project?.gambar3}`} alt="" />
            </div>
            <div className='w-full h-full overflow-hidden rounded-xl'>
              <img className='w-full h-full object-cover'
                src={`${BASE_API_URL}/storage/${project?.gambar4}`} alt="" />
            </div>
          </div>

          <div className='md:grid md:grid-cols-3 py-10 gap-7'>
            <div className='md:col-span-2 flex flex-col gap-3'>
              <div dangerouslySetInnerHTML={{ __html: project?.konten }}></div>

            </div>
            <div className='mt-12 md:mt-0'>
              <h3 className='text-lg font-semibold text-dark-blue dark:text-white pb-3'>Hasil Karya Lainnya</h3>
              <div className='flex flex-col gap-2'>
                <OtherProjects />
              </div>
            </div>
          </div>
        </div>
      )}
    </GuestLayout>
  )
}

export default DetailProject