import React from "react";
import GuestLayout from "./../../layouts/GuestLayout";
import TopLink from "./../../components/TopLink";

const VisiMisi = () => {
  return (
    <GuestLayout>
      <TopLink />
      <div className="container mx-auto py-10 px-4 relative">
        <div className="mb-10 relative">
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              VISI
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Visi"
            >
              VISI
            </h1>
          </div>
          <p className="text-2xl lg:px-96 text-gray-700 dark:text-white text-center">
            Mewujudkan HMTI yang proaktif dalam mewadahi aktivitas kemahasiswaan
            serta menghasilkan mahasiswa yang handal dan kompeten di bidang IT
            untuk masa depan yang lebih baik.
          </p>
        </div>
        <div className="mb-10 p-5">
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              MISI
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              MISI
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <ul className="list-disc text-2xl text-gray-700 dark:text-white mx-8">
                <li className="mb-2">
                  Mengoptimalkan peran HMTI sebagai wadah pengembangan ide dan
                  kreativitas mahasiswa dengan pendekatan inklusif dan beragam.
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-disc text-2xl text-gray-700 dark:text-white mx-8">
                <li className="mb-2">
                  Mempererat hubungan antara civitas akademik, alumni, dan
                  mahasiswa guna membangun relasi yang kuat dan berkelanjutan
                  dalam mendukung perkembangan IT dan pengembangan karier
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              TUJUAN
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Tujuan"
            >
              TUJUAN
            </h1>
          </div>
          <p className="text-2xl lg:px-96 text-gray-700 dark:text-white  text-center">
            Mencapai kesejahteraan bersama melalui inovasi, kolaborasi, dan aksi
            nyata yang bermanfaat bagi seluruh anggota dan masyarakat luas.
          </p>
        </div>
      </div>
    </GuestLayout>
  );
};

export default VisiMisi;
