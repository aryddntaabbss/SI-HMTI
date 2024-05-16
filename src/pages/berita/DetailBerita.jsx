import React from "react";
import GuestLayout from "../../layouts/GuestLayout";

const DetailBerita = () => {
  return (
    <>
      <GuestLayout>
        <article>
          <div
            className="relative h-[90vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/assets/img/berita-hero.jpg')` }}
          >
            <div className="absolute bottom-0 w-full flex flex-col lg:justify-center justify-end lg:gap-8 gap-5 h-1/2 lg:px-28 px-10 py-10 bg-gradient-to-t from-good-blue dark:from-dark-blue">
              <span className="w-fit py-2 md:px-8 px-5 bg-good-blue font-medium lg:text-xl text-white rounded-lg">
                Teknologi
              </span>
              <h1 className="lg:max-w-[90%] font-bold md:text-5xl text-2xl text-light-blue md:leading-[70px] leading-[40px] text-shadow shadow-black">
                Ini Judul Sebuah Berita Viral Terbaru Yang Memancing Ribut
              </h1>
            </div>
          </div>
          <div className="lg:px-28 px-10 py-5 dark:bg-gradient-to-b dark:from-good-blue dark:to-dark-blue text-sm md:text-base ">
            <div>
              <p>16 Juni 2024 - Dibaca 666 kali</p>
              <p>
                <strong>By Belki Sad</strong>, UI/UX Design
              </p>
            </div>
            <section className=" lg:max-w-[780px] mx-auto py-10 flex flex-col gap-10 ">
              <p className="text-justify">
                Outward quarter heighten plant whistle pretend moderation queen
                present cotton island clever welcome ring pigeon clerk top
                modest explosion begin breakfast include scatter precious
                important queen angle widow neighborhood funny tour unite beam
                direction neglect old sugar ago ceremony agree afraid wisdom
                husband cave frighten landlord engineer translation steam
                opposition partner creep pile block multiplication council
                complete behavior advance egg cat main complain prize greed
                arrive arrive rule solution attraction hardly english ripen
                grand truth expense course please force pen dog damage ripen
                anybody greed call disappoint complete coward latter organ
                garden city stone art cool ditch strength edge peace.
              </p>
              <p className="text-justify">
                Beg humble strict wealth damp apology impossible baggage belief
                town package harvest temper confuse ride motherhood ear division
                immense wise strengthen shilling entire modest ready plan oppose
                pity thumb rid machine else wide difference evening shade
                disrespect world pastry christmas flash make press steer kingdom
                bright black hope salary see invent tent destruction universal
                restaurant neighbor sister indeed anyhow railroad silence staff
                wet provide explode fool annoy wipe splendid shoot upright tough
                turn matter thunder report justice examine railroad
              </p>
              <p className="text-justify">
                Minute recent plural female regular persuade descent scientific
                office bedroom I charm framework influence rubbish body monkey
                suck death rid hammer fish real no if chief give proper spread
                decide I crowd deafen wherever fever float crop appearance
                female descent neck sight sample rope spend first let read ice
                pretend deer shop taste accident cover
              </p>
              <div>
                {/* <div
                  className="md:h-[27rem]  h-[20rem] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/assets/img/berita-image.jpg')`,
                  }}
                ></div> */}
                <img src="/assets/img/berita-image.jpg" alt="" />
                <p className="text-center py-2">
                  Gambar Ini Hanya Sebuah Ilustrasi Semata
                </p>
              </div>
              <p className="text-justify">
                Outward quarter heighten plant whistle pretend moderation queen
                prese husband cave frighten landlord engineer translation steam
                opposition partner creep pile block multiplication council
                complete behavior advance egg cat main complain prize greed
                arrive arrive rule solution attraction hardly english ripen
                grand truth expense course please force pen dog damage ripen
                anybody greed call disappoint complete coward latter organ
                garden city stone art cool ditch strength edge peace.
              </p>
              <p className="text-justify">
                Completion ideal evening need enclose car restaurant inventor
                cheer explain roll melt far opinion use god plow road neat
                dollar curtain woolen reproduce rank waist ease taste quantity
                smoke exercise copy advise world ugly simplicity spite silver
                help procession coin glory toy disrespect motor dinner rock male
                parent boat knot whoever talk usual whose laugh.
              </p>
              <p className="text-justify">
                Curtain angry poem meat seize bank honesty whenever base bravery
                proof truth improve meet sincere cream maybe roar table
                representative essential repetition anything hardly curve bake
                main tea hesitation translation whom spring wound avenue
                absolute guard gate order mill corn breath paint efficient swing
                kind down jewel save more soon money regular ship send gun shock
                librarian record hindrance how sight idea moon fish explain
                stroke win cost rent perhaps respect take opposite marry valley
                alike astonish reproduce well grateful attend line deliver
                protection cost line leather extraordinary president die do
                kneel weigh meat fortunate society dust form border lose
              </p>
              <p className="text-justify">
                Pot puzzle yard by messenger shelter scratch husband share
                profession native excellent degree grand urgent impossible
                straight widen describe resistance bite shilling stroke nature
                before mankind whichever plate rough cliff dull son sow health
                advantage wheat mile pleasant blade university importance
                entertain discomfort belt calculator lamp call please material
                cheap politics difficulty past permission barber pair branch pad
                precious tube own come envelope hand suck calculate hook example
              </p>
            </section>
          </div>
          <div className="max-w-[90%] mx-auto my-32 py-7 flex md:flex-row flex-col justify-between  gap-10 border-t-[3px] border-b-[3px] border-dark-blue dark:border-light-blue">
            <div>
              <p className="text-sm lg:text-base">16/6/2022 | Belki</p>
              <h2 className="py-2 font-semibold md:text-lg">
                Apakah Musti Kiks Nyatakan Cinta Ulang Pe Belina??
              </h2>
            </div>
            <div>
              <p className="text-sm md:text-base">16/6/2022 | Belki</p>
              <h2 className="py-2 font-semibold md:text-lg">
                Apakah Musti Kiks Nyatakan Cinta Ulang Pe Belina?? Tidak Dong!!!
                Ghgh
              </h2>
            </div>
            <div>
              <p className="text-sm md:text-base">16/6/2022 | Belki</p>
              <h2 className="py-2 font-semibold md:text-lg">
                Bikiapa Kong Belina Tolak Kiks Eh?? Kalo Susah Tausa Jawab
              </h2>
            </div>
          </div>
        </article>
      </GuestLayout>
    </>
  );
};

export default DetailBerita;
