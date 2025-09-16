import LogoImg from '../assets/images/logo.png'
import { AiOutlineMore } from "react-icons/ai";
import { links } from '../data/links';
import { Link, useLocation } from 'react-router';

function Navbar() {
    const menuLinks = links
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[1]
    const activePath = pathName

    return (
    <div className='fixed top-0 left-0 w-full h-[92px] border-b-[1px] border-b-gray-100 padx py-[14px] flex items-center justify-between bg-white z-[999]'>
        <Link to='/' className="flex items-end gap-3">
            <img alt='Logo Img' src={LogoImg} className='w-[102px]' />
            <AiOutlineMore className='text-[20px]' />
        </Link>

        <div className="flex items-center gap-8">
            {/* LINKS */}
            {
                menuLinks.map((i, idx) => (
                    <Link key={idx} to={`/${i.link}`} className={`font-semibold border-b-[2px] border-transparent hover:text-primary hover:border-b-primary duration-500 transition-all ${activePath === i.link ? 'text-primary' : 'text-[#475467]'}`}>{i.name}</Link>
                ))
            }
        </div>

        <div className="flex items-center gap-[21px]">
            <Link to='/student' className='btn2 border-primary text-primary'>Sign up</Link>
            <Link to='/student/login' className='btn'>Log in</Link>
        </div>

    </div>
  )
}

export default Navbar
