import React from 'react'
import GuestLayout from '../../layouts/GuestLayout'
import { Link } from 'react-router-dom'
import { TbDeviceMobileCode, TbExternalLink } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import IconProject from '../../components/Project/IconProject';
import { IoGameControllerOutline } from 'react-icons/io5';
import { LuBrainCircuit, LuRadioTower } from 'react-icons/lu';
import { GoFileMedia } from 'react-icons/go';
import { HiMiniCpuChip } from 'react-icons/hi2';
import { MdOutlineVpnLock } from 'react-icons/md';
import ProjectHeader from '../../components/Project/ProjectHeader';
import ProjectList from '../../components/Project/ProjectList';

const Projects = () => {
  return (
    <GuestLayout>
      <div className='min-h-screen py-28 px-10 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-bad-blue dark:to-dark-blue flex flex-col items-center justify-center'>
        <h1 className='text-center text-5xl md:text-6xl text-dark-blue dark:text-light-blue font-bold'>HMTI Projects</h1>
        <p className='text-center text-3xl md:text-5xl italic font-light py-14'>Lampaui Batas Imaji <br />Teknologi Dengan Inovasi.</p>
        <Link to={'/'}
          className=' bg-good-blue p-2 text-white rounded-lg flex items-center gap-2'>Jelajahi Karya <TbExternalLink size={21} />
        </Link>
        <div className='flex flex-wrap gap-4 md:gap-10 justify-center py-24'>
          <IconProject title={'Web Development'}>
            <RiComputerLine size={27} />
          </IconProject>
          <IconProject title={'Mobile Development'}>
            <TbDeviceMobileCode size={27} />
          </IconProject>
          <IconProject title={'Game Development'}>
            <IoGameControllerOutline size={30} />
          </IconProject>
          <IconProject title={'Network Engineering'}>
            <LuRadioTower size={27} />
          </IconProject>
          <IconProject title={'Multimedia'}>
            <GoFileMedia size={27} />
          </IconProject>
          <IconProject title={'Internet of Things'}>
            <HiMiniCpuChip size={27} />
          </IconProject>
          <IconProject title={'AI & Machine Learning'}>
            <LuBrainCircuit size={27} />
          </IconProject>
          <IconProject title={'Ethical Cyber Security'}>
            <MdOutlineVpnLock size={27} />
          </IconProject>
        </div>
      </div>

      <div className='grid grid-cols-6 md:grid-cols-3'>
        <div className='bg-slate-200 dark:bg-bad-blue px-5 md:px-10 py-14'>
          <ul className='flex flex-col gap-10 text-dark-blue dark:text-white '>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><RiComputerLine size={25} /> <p className='hidden md:block'>Web Development</p></Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><TbDeviceMobileCode size={25} /> <p className='hidden md:block'>Mobile Development</p></Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><IoGameControllerOutline size={25} /><p className='hidden md:block'>Game Development</p> </Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><LuRadioTower size={25} /><p className='hidden md:block'>Network Engineering</p> </Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><GoFileMedia size={25} /><p className='hidden md:block'>Multimedia</p> </Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><HiMiniCpuChip size={25} /><p className='hidden md:block'>Internet of Things</p> </Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><LuBrainCircuit size={25} /><p className='hidden md:block'>AI & Machine Learning</p> </Link></li>
            <li><Link to={'/'} className='flex items-center gap-5 font-medium'><MdOutlineVpnLock size={25} /><p className='hidden md:block'>Ethical Cyber Security</p> </Link></li>
          </ul>
        </div>
        <div className='col-span-5 md:col-span-2 px-4 md:px-10 pt-10 pb-56'>
          <div>
            <ProjectHeader>Web Development's Projects</ProjectHeader>
            <ProjectList />
          </div>
          <div>
            <ProjectHeader>Mobile Development's Projects</ProjectHeader>
            <h3 className='text-center italic font-medium py-10'>Coming Soon!</h3>
          </div>
          <div>
            <ProjectHeader>Game Development's Projects</ProjectHeader>
            <h3 className='text-center italic font-medium py-10'>Coming Soon!</h3>
          </div>
          <div>
            <ProjectHeader>Network Engineering's Projects</ProjectHeader>
            <h3 className='text-center italic font-medium py-10'>Coming Soon!</h3>
          </div>
          <div>
            <ProjectHeader>Multimedia's Projects</ProjectHeader>
            <h3 className='text-center italic font-medium py-10'>Coming Soon!</h3>
          </div>
          <div>
            <ProjectHeader>IoT's Projects</ProjectHeader>
            <h3 className='text-center italic font-medium py-10'>Coming Soon!</h3>
          </div>
          <div>
            <ProjectHeader>AI & Machine Learning's Projects</ProjectHeader>
            <ProjectList />
          </div>
          <div>
            <ProjectHeader>Cyber Security's Projects</ProjectHeader>
            <ProjectList />
          </div>
        </div>
      </div>
    </GuestLayout>
  )
}

export default Projects