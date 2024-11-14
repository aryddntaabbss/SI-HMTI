import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import SectionTitle from "../../components/Beranda/SectionTitle";
import { BASE_API_URL } from "../../constants/apiURL";
import GuestLayout from "../../layouts/GuestLayout";
import ImageCard from "../../components/Beranda/ImageCard";
import ImageCardSkeleton from "../../components/Beranda/ImageCardSkeleton";

const AllGalery = () => {
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [galleryNew, setGalleryNew] = useState([]);

  useEffect(() => {
    fetchNewGallery();
    AOS.init({
      duration: 1000,
    });
  }, []);

  const fetchNewGallery = async () => {
    setLoadingGallery(true);
    try {
      const response = await axios.get("/api/galeri-terbaru");
      setGalleryNew(await response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingGallery(false);
    }
  };

  return (
    <GuestLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue relative px-6">
        <div className="w-full pt-16 px-6 lg:px-16 overflow-hidden">
          <SectionTitle title={"KENANGAN HMTI"} />
          <section className="py-8">
            <div className="container mx-auto px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loadingGallery
                  ? Array(8) // Menambah skeleton card untuk menyesuaikan grid
                      .fill(0)
                      .map((_, index) => <ImageCardSkeleton key={index} />)
                  : galleryNew.map((gambar) => (
                      <ImageCard key={gambar?.id} image={gambar?.gambar} />
                    ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </GuestLayout>
  );
};

export default AllGalery;
