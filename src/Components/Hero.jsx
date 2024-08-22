
import {HERO_CONTENT} from "../constants/index"
import pic from "../assets/yo.jpg"
const Hero = () => {
  return (
<div className='border-b border-neutral-900 pb-4 lg:mb-35'>
<div className='flex flex-wrap'>
<div className='w-full lg:w-1/2'>
<div className='flex flex-col items-center lg:items-start'>
<h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'> Kapil Parsodkar</h1>
<span className='bg-gradient-to-r from-orange-300 via-amber-500 to-red-600 bg-clip-text text-4xl tracking-tight text-transparent'>Software Developer</span>
<p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
</div>
</div>
<div className='w-full lg:w-1/2 lg:p'>
<div className='flex justify-center'>
<img src={pic}/>
</div>
</div>
</div>
</div>
  )
}

export default Hero