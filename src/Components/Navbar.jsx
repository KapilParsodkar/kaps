
import logo from "../assets/logo.png"

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
<nav className='mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
<img src={logo} alt="" className='mx-2 w-14'/>
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>

<a href="https://www.linkedin.com/in/kapil-parsodkar-400626229/" target="_blank"><FaLinkedin /></a>
<a href="https://github.com/kapilparsodkar" target="_blank"> <FaGithub/></a>


</div>
</nav>
  )
}

export default Navbar