import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuestLayout from "./../../layouts/GuestLayout";
import HeaderStruktur from "../../components/HeaderStruktur";
import TopLink from "./../../components/TopLink";

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <GuestLayout>
      <TopLink />
      <div className="container mx-auto py-10 px-4 relative overflow-hidden">
        <div className="mb-10 relative">
          <HeaderStruktur id="visi" title="VISI" />
          <p className="text-2xl lg:px-96 text-gray-700 dark:text-white text-center">
            Mewujudkan HMTI yang proaktif dalam mewadahi aktivitas kemahasiswaan
            serta menghasilkan mahasiswa yang handal dan kompeten di bidang IT
            untuk masa depan yang lebih baik.
          </p>
        </div>
        <div className="mb-10 p-5">
          <HeaderStruktur id="misi" title="MISI" />
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
          <HeaderStruktur id="tujuan" title="TUJUAN" />
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
