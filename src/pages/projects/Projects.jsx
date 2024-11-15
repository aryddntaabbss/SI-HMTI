import React, { useEffect, useState } from "react";
import GuestLayout from "../../layouts/GuestLayout";
import { TbDeviceMobileCode, TbExternalLink } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import IconProject from "../../components/Project/IconProject";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuBrainCircuit, LuRadioTower } from "react-icons/lu";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineVpnLock } from "react-icons/md";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectList from "../../components/Project/ProjectList";
import axios from "axios";
import { BASE_API_URL } from "../../constants/apiURL";
import { BASE_API_KEY } from "../../constants/apiURL";
import { BiChip } from "react-icons/bi";
import AOS from "aos";

const Projects = () => {
  const [kategori, setKategori] = useState();

  const fetchKategori = async () => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/api/kategori-projects`,
        {
          headers: {
            "P3RT-HMTI-API-KEY": `${BASE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setKategori(await response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchKategori();
    AOS.init({
      duration: 1500, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <GuestLayout>
      <div className="min-h-screen py-28 px-10 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-bad-blue dark:to-dark-blue flex flex-col items-center justify-center">
        <h1
          data-aos="fade-right"
          className="text-center text-4xl md:text-6xl text-dark-blue dark:text-light-blue font-bold"
        >
          HMTI Projects
        </h1>
        <p
          data-aos="fade-left"
          className="text-center text-2xl md:text-5xl italic font-light py-14"
        >
          Lampaui Batas Imajinasi <br />
          Teknologi Dengan Inovasi.
        </p>
        <div
          data-aos="fade-up"
          className=" bg-good-blue p-2 text-white rounded-lg flex items-center gap-2"
        >
          Jelajahi Karya <TbExternalLink size={21} />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-wrap gap-4 md:gap-10 justify-center py-24"
        >
          <IconProject title={"Web Development"}>
            <RiComputerLine size={27} />
          </IconProject>
          <IconProject title={"Mobile Development"}>
            <TbDeviceMobileCode size={27} />
          </IconProject>
          <IconProject title={"Game Development"}>
            <IoGameControllerOutline size={30} />
          </IconProject>
          <IconProject title={"Network Engineering"}>
            <LuRadioTower size={27} />
          </IconProject>
          <IconProject title={"Multimedia"}>
            <GoFileMedia size={27} />
          </IconProject>
          <IconProject title={"Internet of Things"}>
            <BiChip size={27} />
          </IconProject>
          <IconProject title={"AI & Machine Learning"}>
            <LuBrainCircuit size={27} />
          </IconProject>
          <IconProject title={"Ethical Cyber Security"}>
            <MdOutlineVpnLock size={27} />
          </IconProject>
        </div>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-3">
        <div className="bg-slate-200 dark:bg-bad-blue px-5 md:px-10 py-14">
          <ul
            data-aos="fade-right"
            className="flex flex-col gap-10 text-dark-blue dark:text-white "
          >
            <li>
              <a
                href="#web-development"
                className="flex items-center gap-5 font-medium"
              >
                <RiComputerLine size={25} />{" "}
                <p className="hidden md:block">Web Development</p>
              </a>
            </li>
            <li>
              <a
                href={"#mobile-development"}
                className="flex items-center gap-5 font-medium"
              >
                <TbDeviceMobileCode size={25} />{" "}
                <p className="hidden md:block">Mobile Development</p>
              </a>
            </li>
            <li>
              <a
                href={"#game-development"}
                className="flex items-center gap-5 font-medium"
              >
                <IoGameControllerOutline size={25} />
                <p className="hidden md:block">Game Development</p>{" "}
              </a>
            </li>
            <li>
              <a
                href={"#network-engineering"}
                className="flex items-center gap-5 font-medium"
              >
                <LuRadioTower size={25} />
                <p className="hidden md:block">Network Engineering</p>{" "}
              </a>
            </li>
            <li>
              <a
                href={"#multimedia"}
                className="flex items-center gap-5 font-medium"
              >
                <GoFileMedia size={25} />
                <p className="hidden md:block">Multimedia</p>{" "}
              </a>
            </li>
            <li>
              <a
                href={"#internet-of-things"}
                className="flex items-center gap-5 font-medium"
              >
                <BiChip size={25} />
                <p className="hidden md:block">Internet of Things</p>{" "}
              </a>
            </li>
            <li>
              <a
                href={"#ai-machine-learning"}
                className="flex items-center gap-5 font-medium"
              >
                <LuBrainCircuit size={25} />
                <p className="hidden md:block">AI & Machine Learning</p>{" "}
              </a>
            </li>
            <li>
              <a
                href={"#ethical-cyber-security"}
                className="flex items-center gap-5 font-medium"
              >
                <MdOutlineVpnLock size={25} />
                <p className="hidden md:block">Ethical Cyber Security</p>{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-2 px-4 md:px-10 pt-10 pb-56">
          <div id="web-development">
            <ProjectHeader>Web Development's Projects</ProjectHeader>
            <ProjectList slug={"web-development"} />
          </div>
          <div id="mobile-development">
            <ProjectHeader>Mobile Development's Projects</ProjectHeader>
            <ProjectList slug={"mobile-development"} />
          </div>
          <div id="game-development">
            <ProjectHeader>Game Development's Projects</ProjectHeader>
            <ProjectList slug={"game-development"} />
          </div>
          <div id="network-engineering">
            <ProjectHeader>Network Engineering's Projects</ProjectHeader>
            <ProjectList slug={"network-engineering"} />
          </div>
          <div id="multimedia">
            <ProjectHeader>Multimedia's Projects</ProjectHeader>
            <ProjectList slug={"multimedia"} />
          </div>
          <div id="internet-of-things">
            <ProjectHeader>IoT's Projects</ProjectHeader>
            <ProjectList slug={"internet-of-things"} />
          </div>
          <div id="ai-machine-learning">
            <ProjectHeader>AI & Machine Learning's Projects</ProjectHeader>
            <ProjectList slug={"ai-machine-learning"} />
          </div>
          <div id="ethical-cyber-security">
            <ProjectHeader>Cyber Security's Projects</ProjectHeader>
            <ProjectList slug={"ethical-cyber-security"} />
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Projects;
