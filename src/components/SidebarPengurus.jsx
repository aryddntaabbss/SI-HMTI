import React from "react";

const SidebarPengurus = () => {
  return (
    <aside className="hidden min-w-[200px] max-w-[225px] ms-16 md:flex flex-col gap-3">
      <a href="#ketua-umum" className="text-dark-blue dark:text-white">
        Ketua Umum
      </a>
      <a
        href="#sekertaris-umum"
        className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
      >
        Sekertaris Umum
      </a>
      <a
        href="#bendahara-umum"
        className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
      >
        Bendahara Umum
      </a>
      <a href="#bidang-bidang" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
        Bidang-Bidang
      </a>
      <div className="ms-5 flex flex-col gap-3">
        <a href="#pao" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Penggerak Aparatur Organisasi
        </a>
        <a href="#humas" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Hubungan Masyarakat
        </a>
        <a href="#minat-bakat" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Minat dan Bakat
        </a>
        <a href="#keuangan" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Keuangan
        </a>
        <a href="#keagamaan" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Keagamaan
        </a>
        <a
          href="#pemberdayaan-wanita"
          className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
        >
          Pemberdayaan Wanita
        </a>
        <a href="#p3rt" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Penelitian, Pengembangan, dan Pemberdayaan Riset Teknologi
        </a>
        <a
          href="#kesekretariatan"
          className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all"
        >
          Kesekretariatan
        </a>
        <a href="#gam" className="text-dark-blue/50 dark:text-white/50 hover:text-dark-blue dark:hover:text-white transition-all">
          Gerakan Aksi Mahasiswa
        </a>
      </div>
    </aside>
  );
};

export default SidebarPengurus;
