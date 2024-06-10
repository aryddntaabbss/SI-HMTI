import BidangPengurus from "../../components/BidangPengurus";
import CardPengurus from "../../components/CardPengurus";
import SidebarPengurus from "../../components/SidebarPengurus";
import GuestLayout from "../../layouts/GuestLayout";
import TopLink from "./../../components/TopLink";

const Struktur = () => {
  return (
    <GuestLayout>
      <TopLink />
      <div className="flex flex-col justify-center items-center py-5 text-dark-blue dark:text-white text-lg font-semibold">
        <h1>Struktur Pengurus Organisasi</h1>
        <h1>Himpunan Mahasiswa Informatika</h1>
        <h1>Periode 2024/2025</h1>
      </div>

      <div className="flex min-h-[80vh] py-5">
        <SidebarPengurus />

        <div className="flex flex-col items-center w-full">
          {/* KETUM, SEKUM, BENDUM */}
          <div className="flex justify-center gap-2 md:gap-14">
            {/* BENDAHARA UMUM */}
            <CardPengurus
              id="bendahara-umum"
              title="Bendahara Umum"
              nama="Ratih Sagita Safril"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Gizmo"
              className="mt-60"
            />

            {/* KETUA UMUM */}
            <CardPengurus
              id="ketua-umum"
              title="Ketua Umum"
              nama="M. Fikri Ramadhani"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Abby"
            />

            {/* SEKERTARIS UMUM */}
            <CardPengurus
              id="sekertaris-umum"
              title="Sekertaris Umum"
              nama="Alriskhandy M. Idris"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Angel"
              className="mt-32"
            />
          </div>
          <h1
            id="bidang-bidang"
            className="border-t-2 border-b-2 border-dark-blue/50 dark:border-white/50 mt-20 mb-16 py-2 px-10 text-center text-lg md:text-2xl font-semibold"
          >
            BIDANG-BIDANG
          </h1>
          {/* PAO */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              PENGERAK APARATUR ORGANISASI
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              PENGERAK APARATUR ORGANISASI
            </h1>
          </div>
          <BidangPengurus id="pao">
            <CardPengurus
              title="Ketua Bidang"
              nama="Rizki Hi. Ibrahim"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Julfikar Ismail"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
          {/* HUMAS */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              HUBUNGAN MASYARAKAT
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              HUBUNGAN MASYARAKAT
            </h1>
          </div>
          <BidangPengurus id={"humas"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Muhammad Akmal Basahona"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Azharirama Hamid"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
          {/* MINAT BAKAT */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              MINAT DAN BAKAT
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              MINAT DAN BAKAT
            </h1>
          </div>
          <BidangPengurus id={"minat-bakat"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Agil Aryaddinata Abbas"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="M. Mulkan A, Mufti"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
          {/* KEUANGAN */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              KEUANGAN
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              KEUANGAN
            </h1>
          </div>
          <BidangPengurus id={"keuangan"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Dela Laheru"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Gizmo"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Destitha Almaqvira Bachmid"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Coco"
              className="mt-32"
            />
          </BidangPengurus>
          {/* KEAGAMAAN */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              KEAGAMAAN
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              KEAGAMAAN
            </h1>
          </div>
          <BidangPengurus id={"keagamaan"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Zulfikri Ahmad"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Felix"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Jerryantho Pareda"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
          {/* PEMBERDAYAAN WANITA */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              PEMBERDAYAAN WANITA
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              PEMBERDAYAAN WANITA
            </h1>
          </div>
          <BidangPengurus id={"pemberdayaan-wanita"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Anggraini Andari"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Gizmo"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Minarsih Nurdin"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Coco"
              className="mt-32"
            />
          </BidangPengurus>
          {/* P3RT */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              P3RT
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              P3RT
            </h1>
          </div>
          <BidangPengurus id={"p3rt"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Wahyu Jihad Umaternate"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Rizki M Nur"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
          {/* KESEKRETARIATAN */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              KESEKRETARIATAN
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              KESEKRETARIATAN
            </h1>
          </div>
          PENELITIAN, PENGEMBANGAN, DAN PEMBERDAYAAN RISET TEKNOLOGI
          <BidangPengurus id={"kesekretariatan"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Aulia Abdulkadir"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Akbbar Alif Ramadhan"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
          {/* GAM */}
          <div className="mb-4 font-bold text-center relative">
            <span className="text-5xl absolute inset-0 flex justify-center items-center text-black dark:text-white z-10">
              GERAKAN AKSI MAHASISWA
            </span>
            <h1
              className="text-8xl italic text-gray-100 dark:text-dark-blue text-border relative z-0"
              data-text="Misi"
            >
              GERAKAN AKSI MAHASISWA
            </h1>
          </div>
          <BidangPengurus id={"gam"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Agam La Mudia"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Oktavianto Leibo"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              className="mt-32"
            />
          </BidangPengurus>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Struktur;
