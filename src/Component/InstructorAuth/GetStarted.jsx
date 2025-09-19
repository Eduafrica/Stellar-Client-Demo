import { Link } from 'react-router'
import LogoImg  from '../../assets/images/logo.png'

function GetStarted() {
  return (
    <div className="w-[80%] border-[1px] border-black-200 flex flex-col items-center justify-center gap-[10px] p-[10px]">
        <div className="flex flex-[20px]  w-[80%]">
            <div className="flex flex-col gap-[18px] items-center justify-center">

                <div className="flex flex-col w-[80%] gap-[28px] items-center justify-center">

                    <div className="flex flex-col gap-[30px]">
                        <div className="flex items-center justify-center">
                            <img alt="Edu africa logo" src={LogoImg} className='w-[175px]' /> 
                        </div>

                        <p className='text-[24px] text-text-primary font-bold text-center'>
                            A classical Education for 
                            your future accessible
                            anywhere, anytime
                        </p>

                        <div className="flex flex-col gap-[20px]">
                            <Link to='/student/register' className="btn2">I'm new here</Link>
                            <Link to='/student/login' className="btn">I have an account</Link>
                        </div>

                    </div>

                    <div className="text-[12px] text-text-secondary font-medium">
                        Are you an instructor or organization? <Link to='/' className='text-primary'>Go here</Link>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default GetStarted
