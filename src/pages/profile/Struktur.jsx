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
              mt="60"
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
              mt="32"
            />
          </div>

          <h1
            id="bidang-bidang"
            className="border-t-2 border-b-2 border-dark-blue/50 dark:border-white/50 mt-20 mb-16 py-2 px-10 text-center text-lg md:text-2xl font-semibold"
          >
            BIDANG-BIDANG
          </h1>

          {/* PAO */}
          <BidangPengurus id="pao" title={"PENGGERAK APARATUR ORGANISASI"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Rizki Hi. Ibrahim"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Julfikar Ismail"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>

          {/* HUMAS */}
          <BidangPengurus id={"humas"} title={"HUBUNGAN MASYARAKAT"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Muhammad Akmal Basahona"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Azharirama Hamid"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>

          {/* MINAT BAKAT */}
          <BidangPengurus id={"minat-bakat"} title={"MINAT DAN BAKAT"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Agil Aryaddinata Abbas"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="M. Mulkan A, Mufti"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>

          {/* KEUANGAN */}
          <BidangPengurus id={"keuangan"} title={"Keuangan"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Dela Laheru"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Gizmo"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Destitha Almaqvira Bachmid"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Coco"
              mt="32"
            />
          </BidangPengurus>
          {/* KEAGAMAAN */}
          <BidangPengurus id={"keagamaan"} title={"KEAGAMAAN"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Zulfikri Ahmad"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Felix"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Jerryantho Pareda"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>

          {/* PEMBERDAYAAN WANITA */}
          <BidangPengurus
            id={"pemberdayaan-wanita"}
            title={"PEMBERDAYAAN WANITA"}
          >
            <CardPengurus
              title="Ketua Bidang"
              nama="Anggraini Andari"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Gizmo"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Minarsih Nurdin"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Coco"
              mt="32"
            />
          </BidangPengurus>

          {/* P3RT */}
          <BidangPengurus
            id={"p3rt"}
            title={"PENELITIAN, PENGEMBANGAN, DAN PEMBERDAYAAN RISET TEKNOLOGI"}
          >
            <CardPengurus
              title="Ketua Bidang"
              nama="Wahyu Jihad Umaternate"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Rizki M Nur"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>

          {/* KESEKRETARIATAN */}
          <BidangPengurus id={"kesekretariatan"} title={"KESEKRETARIATAN"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Aulia Abdulkadir"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Akbbar Alif Ramadhan"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>

          {/* GAM */}
          <BidangPengurus id={"gam"} title={"GERAKAN AKSI MAHASISWA"}>
            <CardPengurus
              title="Ketua Bidang"
              nama="Agam La Mudia"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Chester"
            />
            <CardPengurus
              title="Sekertaris Bidang"
              nama="Oktavianto Leibo"
              image="https://api.dicebear.com/8.x/notionists/svg?seed=Charlie"
              mt="32"
            />
          </BidangPengurus>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Struktur;
