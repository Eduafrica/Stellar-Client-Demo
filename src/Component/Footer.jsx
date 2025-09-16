import { Link } from "react-router"
import LogoImg from '../assets/images/logo.png'
function Footer() {
    const year = new Date().getFullYear()

  return (
    <div className="bg-gray-50 w-full padx pt-[64px] pb-[48px] flex flex-col gap-16">
        <div className="w-full px-[32px] flex items-start justify-between">
            <div className="flex flex-col gap-[32px]">
                <img alt="educafrica logo" src={LogoImg} className="w-[102px]" />

                <p className="text-[16px] font-medium text-[#1D2939] w-[40%]">
                    Transforming learning experience with data-driven insight, AI- powered tools, and expertise combinedby
                </p>
            </div>

            <div className="flex items-start justify-start gap-[71px]">
                <div className="flex flex-col gap-4">
                    <p className="font-semibold text-[#344054] text-[14px]">Resources</p>

                    <div className="flex flex-col gap-3 text-[#344054] font-semibold text-[16px]">
                        <Link to='/'>Home</Link>
                        <Link to='/'>About Us</Link>
                        <Link to='/courses' >Courses</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold text-[#344054] text-[14px]">Courses</p>

                    <div className="flex flex-col gap-3 text-[#344054] font-semibold text-[16px]">
                        <Link>African language</Link>
                        <Link>African Culture</Link>
                        <Link>Product Design</Link>
                        <Link>Data Analysis</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-semibold text-[#344054] text-[14px]">Socials</p>

                    <div className="flex flex-col gap-3 text-[#344054] font-semibold text-[16px]">
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>Twitter</Link>
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full border-t-[1px] border-t-gray-200 pt-[32px] flex items-center justify-between gap-[32px]">

            <div className="">
                &copy; {year} Eduafrica. All right reserved.
            </div>

            <div className="flex items-center gap-4 font-inter font-normal text-[16px] text-gray-500">
                <Link>Terms</Link>
                <Link>Privacy</Link>
                <Link>Cookies</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer

