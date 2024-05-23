import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { dateFormat } from "../../libs/date-libs";
import { BASE_API_URL } from "../../constants/apiURL";
import OtherNews from "../../components/OtherNews";
import BounceLoading from "../../utils/BounceLoading";

const DetailBerita = () => {
  const { slug } = useParams();
  const [news, setNews] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/news/${slug}/detail`
      );
      setNews(await response.data);
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <GuestLayout>
        {loading ? (
          <BounceLoading />
        ) : error ? (
          <p>eror nih bos</p>
        ) : (
          <>
            <article>
              <div
                className="relative h-[90vh] w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('/assets/img/berita-hero.jpg')`,
                }}
              >
                <div className="absolute bottom-0 w-full flex flex-col lg:justify-center justify-end lg:gap-8 gap-5 h-1/2 lg:px-28 px-10 py-10 bg-gradient-to-t from-good-blue dark:from-dark-blue">
                  <span className="w-fit py-2 md:px-8 px-5 bg-good-blue font-medium lg:text-xl text-white rounded-lg">
                    {news?.news_category.title}
                  </span>
                  <h1 className="lg:max-w-[90%] font-bold md:text-5xl text-2xl text-light-blue md:leading-[70px] leading-[40px] text-shadow shadow-black">
                    {news?.title}
                  </h1>
                </div>
              </div>
              <div className="lg:px-28 px-10 py-5 dark:bg-gradient-to-b dark:from-good-blue dark:to-dark-blue text-sm md:text-base ">
                <div>
                  <p>
                    {news &&
                      `${dateFormat(news?.created_at)} - ${
                        news?.views
                      } kali dibaca`}
                  </p>
                  <p>
                    <strong>by {news?.author_name}</strong>
                  </p>
                </div>
                <section className=" lg:max-w-[780px] mx-auto py-10 flex flex-col gap-10 ">
                  <p className="text-justify">{news?.content}</p>
                  <div className="">
                    <img src={`${BASE_API_URL}/${news?.image}`} alt=""
                    className="max-h-[450px] mx-auto" />
                    {/* <p className="text-center py-2">
                  Gambar Ini Hanya Sebuah Ilustrasi Semata
                </p> */}
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
