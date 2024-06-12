import BidangPengurus from "../../components/BidangPengurus";
import CardPengurus from "../../components/CardPengurus";
import HeaderStruktur from "../../components/HeaderStruktur";
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

      <div className="flex min-h-[80vh] py-5 overflow-x-hidden md:overflow-x-auto">
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
              className="mt-60 md:mt-32"
            />
          </div>
          <h1
            id="bidang-bidang"
            className="border-t-2 border-b-2 border-dark-blue/50 dark:border-white/50 mt-20 mb-16 py-2 px-10 text-center text-lg md:text-2xl font-semibold"
          >
            BIDANG-BIDANG
          </h1>

          {/* PENGGERAK APARATUR ORGANISASI */}
          <HeaderStruktur id="pao" title="PENGERAK APARATUR ORGANISASI" />
          <BidangPengurus>
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
          <HeaderStruktur id="humas" title="HUBUNGAN MASYARAKAT" />
          <BidangPengurus>
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
          <HeaderStruktur id="minat-bakat" title="MINAT DAN BAKAT" />
          <BidangPengurus>
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
          <HeaderStruktur id="keuangan" title="KEUANGAN" />
          <BidangPengurus>
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
          <HeaderStruktur id="keagamaan" title="KEAGAMAAN" />
          <BidangPengurus>
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
          <HeaderStruktur
            id="pemberdayaan-wanita"
            title="PEMBERDAYAAN WANITA"
          />
          <BidangPengurus>
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
          <HeaderStruktur id="p3rt" title="P3RT" />
          <BidangPengurus>
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
          <HeaderStruktur id="kesekretariatan" title="KESEKRETARIATAN" />
          <BidangPengurus>
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
          <HeaderStruktur id="gam" title="GERAKAN AKSI MAHASISWA" />
          <BidangPengurus>
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
