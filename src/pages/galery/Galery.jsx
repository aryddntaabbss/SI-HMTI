import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import SectionTitle from "../../components/Beranda/SectionTitle";
import ImageCard from "../../components/Beranda/ImageCard";
import ImageCardSkeleton from "../../components/Beranda/ImageCardSkeleton";
import GuestLayout from "../../layouts/GuestLayout";
import { BASE_API_URL } from "../../constants/apiURL";

const Galery = () => {
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [galleryNew, setGalleryNew] = useState([]);
  const [galleryOld, setGalleryOld] = useState([]);

  useEffect(() => {
    fetchNewGallery();
    fetchOldGallery();
    AOS.init({
      duration: 1000,
    });
  }, []);

  //  New Galery
  const fetchNewGallery = async () => {
    setLoadingGallery(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/galeri-terbaru`);
      setGalleryNew(await response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingGallery(false);
    }
  };

  //  Old Galery
  const fetchOldGallery = async () => {
    setLoadingGallery(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/galeri-terlama`);
      setGalleryOld(await response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingGallery(false);
    }
  };

  return (
    <GuestLayout>
      <div className="flex flex-col-reverse py-28 lg:flex-row lg:max-h-screen bg-gradient-to-b from-white to-light-blue dark:from-dark-blue dark:to-bad-blue overflow-hidden">
        <div className="w-full lg:w-1/2 px-6 py-5 lg:py-16 lg:pl-40  flex justify-center items-center">
          <div
            data-aos="fade-right"
            className="flex flex-col gap-5 w-auto h-auto"
          >
            <h1 className="font-bold text-6xl lg:text-7xl">GALLERY HMTI</h1>
            <h3 className="text-3xl lg:text-5xl">
              Simpan Sejuta Cerita, Biarkan Kenangan Berbicara
            </h3>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 py-16 lg:pr-40 lg:pb-24 flex justify-center items-center"
        >
          <div className="relative w-full h-auto flex justify-center items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/galeryIMG.png`}
              alt="Logo HMTI"
              className="w-2/4 -z-0 lg:w-4/5 max-w-lg "
            />
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-white dark:bg-dark-blue"
      >
        <path
          className="fill-light-blue dark:fill-bad-blue"
          fillOpacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,122.7C480,139,600,213,720,245.3C840,277,960,267,1080,229.3C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* New Galery */}
      <div className="bg-white dark:bg-dark-blue py-8">
        <div className="w-full pt-16 px-6 lg:px-16 overflow-hidden">
          <SectionTitle title={"CUPLIKAN KOLEKSI TERKINI"} />
          <section className="py-8">
            <div className="container mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {loadingGallery
                  ? Array(6)
                      .fill(0)
                      .map((_, index) => <ImageCardSkeleton key={index} />)
                  : galleryNew
                      .slice(0, 6)
                      .map((gambar, index) => (
                        <ImageCard key={gambar?.id} image={gambar?.gambar} />
                      ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* End New Galery */}

      {/* Old Galery */}
      <div className="bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue py-8">
        <div className="w-full pt-16 px-6 lg:px-16 overflow-hidden">
          <SectionTitle title={"JELAJAHI KENANGAN"} />
          <section className="py-8">
            <div className="container mx-auto px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {loadingGallery
                  ? Array(6)
                      .fill(0)
                      .map((_, index) => <ImageCardSkeleton key={index} />)
                  : galleryOld
                      .slice(0, 6)
                      .map((gambar, index) => (
                        <ImageCard key={gambar?.id} image={gambar?.gambar} />
                      ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* End Old Galery */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-light-blue dark:bg-bad-blue"
      >
        <path
          className="fill-blue-600"
          fillOpacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,74.7C672,32,768,32,864,74.7C960,117,1056,203,1152,202.7C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </GuestLayout>
  );
};

export default Galery;
