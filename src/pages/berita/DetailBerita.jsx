import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { dateFormat } from "../../libs/date-libs";
import { BASE_API_URL } from "../../constants/apiURL";
import { BASE_API_KEY } from "../../constants/apiURL";
import OtherNews from "../../components/OtherNews";
import BounceLoading from "../../utils/BounceLoading";
import NotFound from "../../components/NotFound";

const DetailBerita = () => {
  const { slug } = useParams();
  const [berita, setBerita] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchBerita = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/api/berita/${slug}`, {
        headers: {
          "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      setBerita(await response.data);
    } catch (error) {
      // console.error("Error:", error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBerita();
  }, []);

  return (
    <>
      <GuestLayout>
        {loading ? (
          <BounceLoading />
        ) : error ? (
          <NotFound
            msg="Sepertinya berita yang anda cari tidak ditemukan."
            btnText="Kembali ke Berita"
            btnLink="/berita"
          />
        ) : (
          <>
            <article>
              <div
                className="relative h-[90vh] w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${BASE_API_URL}/storage/${berita?.gambar}')`,
                }}
              >
                <div className="absolute bottom-0 w-full flex flex-col lg:justify-center justify-end lg:gap-8 gap-5 h-1/2 lg:px-28 px-10 py-10 bg-gradient-to-t from-white dark:from-dark-blue">
                  <span className="w-fit py-2 md:px-8 px-5 bg-good-blue font-medium lg:text-xl text-white rounded-lg">
                    {berita?.kategori.judul_kategori}
                  </span>
                  <h1 className="lg:max-w-[90%] font-bold md:text-5xl text-2xl text-light-blue md:leading-[70px] leading-[40px] text-shadow shadow-black">
                    {berita?.judul}
                  </h1>
                </div>
              </div>
              <div className="lg:px-28 px-10 py-5 dark:bg-gradient-to-b dark:from-good-blue dark:to-dark-blue text-sm md:text-base ">
                <div>
                  <p>
                    {berita &&
                      `${dateFormat(berita?.created_at)} - ${
                        berita?.dibaca
                      } kali dibaca`}
                  </p>
                  <p>
                    <strong>by {berita?.penulis}</strong>
                  </p>
                </div>
                <section className=" lg:max-w-[780px] mx-auto py-10 flex flex-col gap-10 ">
                  <div
                    dangerouslySetInnerHTML={{ __html: berita?.konten }}
                  ></div>
                  <div className="0">
                    <img
                      src={`${BASE_API_URL}/storage/${berita?.gambar}`}
                      alt="gambar-berita"
                      className="max-h-[450px] mx-auto rounded-xl"
                    />
                  </div>
                </section>
              </div>
            </article>

            <OtherNews />
          </>
        )}
      </GuestLayout>
    </>
  );
};

export default DetailBerita;
