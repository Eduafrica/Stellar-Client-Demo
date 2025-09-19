import LogoImg from '../assets/images/logo.png'
import { AiOutlineMore } from "react-icons/ai";
import { InstructorAccountlinks, links, StudentAccountlinks } from '../data/links';
import { Link, useLocation, useNavigate } from 'react-router';
import useUserStore from '../store/userStore';
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from 'react';
import { signout } from '../Helpers/api';
import { notify } from '../Utils/toast';


function Navbar() {
    const { user, clearUser } = useUserStore()
    const menuLinks = links
    const studentLinks = StudentAccountlinks
    const instructorLinks = InstructorAccountlinks

    const navigate = useNavigate()

    const loc = useLocation()
    const pathName = loc.pathname.split('/')[1]
    const activePath = pathName

    const [ loading, setLoading ] = useState(false)
    const handleLogout = async () => {
        if(loading) return

        try {
            setLoading(true)
            const res = await signout()

            if(res.success) {
                notify('suceess', res.message)
                clearUser()
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                notify('error', res.message || 'Unable to signout user')
                clearUser()
            }
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

    return (
    <div className='fixed top-0 left-0 w-full h-[92px] border-b-[1px] border-b-gray-100 padx py-[14px] flex items-center justify-between bg-white z-[999]'>
        <Link to='/' className="flex items-end gap-3">
            <img alt='Logo Img' src={LogoImg} className='w-[102px]' />
            <AiOutlineMore className='text-[20px]' />
        </Link>

        <div className="flex items-center gap-8">
            {/* LINKS */}
            {
                user?.accountType?.toLowerCase() === 'student' ? (
                    studentLinks.map((i, idx) => (
                        <Link key={idx} to={`/${i.link}`} className={`font-semibold border-b-[2px] border-transparent hover:text-primary hover:border-b-primary duration-500 transition-all ${activePath === i.link ? 'text-primary' : 'text-[#475467]'}`}>{i.name}</Link>
                    ))
                ) : user?.accountType?.toLowerCase() === 'instructor' ? (
                    instructorLinks.map((i, idx) => (
                        <Link key={idx} to={`/${i.link}`} className={`font-semibold border-b-[2px] border-transparent hover:text-primary hover:border-b-primary duration-500 transition-all ${activePath === i.link ? 'text-primary' : 'text-[#475467]'}`}>{i.name}</Link>
                    ))
                ) : (
                    menuLinks.map((i, idx) => (
                        <Link key={idx} to={`/${i.link}`} className={`font-semibold border-b-[2px] border-transparent hover:text-primary hover:border-b-primary duration-500 transition-all ${activePath === i.link ? 'text-primary' : 'text-[#475467]'}`}>{i.name}</Link>
                    ))
                )
            }
        </div>

        {
            user ? (
                <div className="flex items-center gap-2">
                    <div className="">Hello, {user?.displayName || user?.name}</div>
                    <div onClick={handleLogout} className="cursor-pointer">
                        <AiOutlineLogout className='text-[24px]' />
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-[21px]">
                    <Link to='/student' className='btn2 border-primary text-primary'>Sign up</Link>
                    <Link to='/student/login' className='btn'>Log in</Link>
                </div>
            )
        }

    </div>
  )
}

export default Navbar
