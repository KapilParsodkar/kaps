
import { RiReactjsLine } from 'react-icons/ri'
import { RiNextjsLine } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { RiNodejsLine } from 'react-icons/ri'

import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";




const Tech = () => {
  return (
<div className='border-b border-neutral-800 pb-24'>
<h1 className='my-20 text-center text-4xl'>Skills</h1>
<div className='flex flex-wrap items-center justify-center gap-4'>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiReactjsLine className='text-7xl text-cyan-400'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiNextjsLine className='text-7xl '/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiJavascriptLine className='text-7xl text-yellow-400'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiNodejsLine className='text-7xl text-green-600'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiMongodb className='text-7xl text-green-400'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaPython className='text-7xl text-blue-200'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<BiLogoPostgresql className='text-7xl text-blue-800'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiTypescript className='text-7xl text-blue-600'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiDjango className='text-7xl text-yellow-500'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiTailwindCssFill className='text-7xl text-cyan-200'/>
</div>
<div className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaHtml5 className='text-7xl text-red-500'/>
</div>
</div>
</div>
  )
}

export default Tech