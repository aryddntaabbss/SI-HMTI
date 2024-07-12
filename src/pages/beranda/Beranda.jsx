import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { Link } from "react-router-dom";
import AOS from "aos";
import HeroBeranda from "../../components/Beranda/HeroBeranda";
import SectionTitle from "../../components/Beranda/SectionTitle";
import EventCard from "../../components/Beranda/EventCard";
import NewsCard from "../../components/Beranda/NewsCard";
import NewsCardSmartphone from "../../components/Beranda/NewsCardSmartphone";
import ImageCard from "../../components/Beranda/ImageCard";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";
import NewsCardSmartphoneSkeleton from "../../components/Beranda/NewsCardSmartphoneSkeleton";
import NewsCardSkeleton from "../../components/Beranda/NewsCardSkeleton";
import Partners from "../../components/Beranda/Partners";
import ImageCardSkeleton from "../../components/Beranda/ImageCardSkeleton";

const Beranda = () => {
  const [loadingBeritaPilihan, setLoadingBeritaPilihan] = useState(true);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [beritaPilihan, setBeritaPilihan] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchBeritaPilihan();
    fetchGallery();
    fetchPartners();
    AOS.init({
      duration: 1000,
    });
  }, []);

  const fetchBeritaPilihan = async () => {
    setLoadingBeritaPilihan(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/berita-pilihan`);
      setBeritaPilihan(await response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingBeritaPilihan(false);
    }
  };

  const fetchGallery = async () => {
    setLoadingGallery(true);
    try {
      const response = await axios.get(`${BASE_API_URL}/api/galeri-terbaru`);
      setGallery(await response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingGallery(false);
    }
  };

  const fetchPartners = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/partners`);
      setPartners(await response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <GuestLayout>
      <div className="flex justify-center overflow-hidden">
        <div className="flex flex-col w-full">
          {/* hero */}
          <HeroBeranda />
          {/* hero */}

          {/* event */}
          <div className="w-full bg-light-blue dark:bg-bad-blue px-6 lg:px-16 pt-32 lg:pt-0 overflow-hidden">
            <SectionTitle title={"HMTI EVENT"} />
            <h1
              data-aos="fade-up"
              className="w-full text-center text-xl font-bold lg:text-2xl italic pt-4 pb-8"
            >
              Semangat Berinovasi
            </h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
              <EventCard
                link={"/event"}
                title={"MARCH EVENT"}
                image={"/assets/img/400x550.png"}
              />
              <EventCard
                link={"/event"}
                title={"DIES NATALIS"}
                image={"/assets/img/400x550.png"}
              />
              <EventCard
                link={"/event"}
                title={"IT-EXPO"}
                image={"/assets/img/400x550.png"}
              />
            </div>
          </div>
          {/* event */}

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

          {/* berita laptop */}
          <div className="w-full hidden lg:block bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue px-6 lg:px-16 py-16 overflow-hidden">
            <SectionTitle title={"HMTI NEWS"} />
            <h1
              data-aos="fade-up"
              className="w-full text-center text-xl font-bold lg:text-2xl italic pt-4 pb-8"
            >
              Berita Pilihan
            </h1>
            <div
              data-aos="fade-up"
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
            >
              {loadingBeritaPilihan ? (
                Array(6)
                  .fill(0)
                  .map((_, index) => <NewsCardSkeleton key={index} />)
              ) : beritaPilihan.length === 0 ? (
                <p>Tidak ada berita</p>
              ) : (
                beritaPilihan.map((news) => (
                  <NewsCard
                    key={news?.id}
                    slug={news?.slug}
                    author={news?.penulis}
                    date={news?.created_at}
                    image={news?.gambar}
                    title={news?.judul}
                    kategori={news.kategori?.judul_kategori}
                  />
                ))
              )}
            </div>
            <div className="w-full">
              <div className="w-full flex justify-center pt-12">
                <Link
                  data-aos="fade-up"
                  onClick={() => window.scrollTo(0, 0)}
                  className="border-2 border-good-blue text-good-blue px-4 py-2 rounded-md font-bold hover:bg-good-blue hover:scale-105 hover:text-light-blue transition-all"
                  href="/berita/kategori/semua-berita"
                >
                  Lihat Berita Lainnya
                </Link>
              </div>
            </div>
          </div>
          {/* berita laptop */}

          {/* berita hp */}
          <div className="w-full lg:hidden bg-gradient-to-b dark:from-dark-blue dark:to-bad-blue from-white to-light-blue px-6 lg:px-16 pt-10 pb-16 overflow-hidden">
            <SectionTitle title={"HMTI NEWS"} />
            <h1
              data-aos="fade-up"
              className="w-full text-center text-xl font-bold lg:text-2xl italic pt-4 pb-8"
            >
              Berita Pilihan
            </h1>
            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="w-full flex flex-row gap-8">
                {loadingBeritaPilihan ? (
                  Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <NewsCardSmartphoneSkeleton key={index} />
                    ))
                ) : beritaPilihan.length === 0 ? (
                  <p>Tidak ada berita</p>
                ) : (
                  beritaPilihan.map((news) => (
                    <NewsCardSmartphone
                      key={news?.id}
                      slug={news?.slug}
                      author={news?.penulis}
                      date={news?.created_at}
                      image={news?.gambar}
                      title={news?.judul}
                      kategori={news.kategori?.judul_kategori}
                    />
                  ))
                )}
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full flex justify-center pt-12"
            >
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="border-2 border-good-blue text-good-blue px-4 py-2 rounded-md font-bold hover:bg-good-blue hover:scale-105 hover:text-light-blue transition-all"
                to={"/berita/kategori/semua-berita"}
              >
                Lihat Berita Lainnya
              </Link>
            </div>
          </div>
          {/* berita hp */}

          {/* galery */}
          <div className="w-full bg-light-blue dark:bg-bad-blue pt-16 px-6 lg:px-16 overflow-hidden">
            <SectionTitle title={"HMTI GALLERY"} />
            <section className="py-8">
              <div className="container mx-auto px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {loadingGallery
                    ? Array(6)
                        .fill(0)
                        .map((_, index) => <ImageCardSkeleton key={index} />)
                    : gallery
                        .slice(0, 6)
                        .map((gambar, index) => (
                          <ImageCard key={gambar?.id} image={gambar?.gambar} />
                        ))}
                </div>
              </div>
            </section>
          </div>
          {/* galery */}

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

          {/* partner */}
          <div className="w-full bg-blue-600">
            <div className="mb-4 font-bold text-center relative">
              <span
                data-aos="fade-left"
                className="text-3xl md:text-5xl absolute inset-0 flex justify-center items-center text-white z-10"
              >
                HMTI PARTNERS
              </span>
              <h1
                data-aos="fade-right"
                className="text-6xl md:text-8xl italic text-transparent text-border relative z-0"
              >
                HMTI PARTNERS
              </h1>
            </div>
            <div className="flex justify-center items-center flex-wrap p-6 md:px-28 gap-10 pt-10 pb-32">
              {partners.map((partner) => (
                <Partners image={partner?.logo} name={partner?.nama} />
              ))}
            </div>
          </div>
          {/* partner */}
        </div>
      </div>
    </GuestLayout>
  );
};

export default Beranda;
