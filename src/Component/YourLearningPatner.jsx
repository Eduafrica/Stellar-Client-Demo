import AppleIconImg from '../assets/images/appleLogg.png'
import PlayStoreIconImg from '../assets/images/googlePlayIcon.png'

import ImgOne from '../assets/images/imgOne.png'
import ImgTwo from '../assets/images/imgTwo.png'
import ImgThree from '../assets/images/imgThree.png'
import ImgFour from '../assets/images/imgFour.png'
import ImgFive from '../assets/images/imgFive.png'


function YourLearningPatner() {
  return (
    <div className='flex items-center justify-between gap-[64px]'>
        <div className="flex-1 flex flex-col gap-[48px]">
            <h1 className='text-[48px] font-semibold text-shadow-gray-900'>
                Your learning partner, each step guided by ease
            </h1>
            <p className="text-[20px] font-light">
                Start your ourney on <span className='text-primary'>Eduafrica</span> and have 
                experience of Digital learning experience
            </p>
            <div className="flex gap-3 items-center">
                <div className="btn bg-black border-black">
                    <img alt='apple store icon' src={AppleIconImg} className='w-[26px]' />
                    <div className="flex flex-col items-start">
                        <p className="text-[10px] font-light">Download on the</p>
                        <p className='text-[15px]'>App Store</p>
                    </div>
                </div>
                <div className="btn bg-black border-black">
                    <img alt='play store icon' src={PlayStoreIconImg} className='w-[26px]' />
                    <div className="flex flex-col items-start">
                        <p className="text-[10px] font-light">GET IT ON</p>
                        <p className='text-[15px]'>Google Play</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            <div className="flex items-end justify-end gap-4">
                <img alt='image' src={ImgOne} className='' />
                <img alt='image' src={ImgTwo} className='' />
            </div>

            <div className="flex gap-4 items-start justify-start">
                <img alt="image" src={ImgThree} />
                <img alt="image" src={ImgFour} />
                <img alt="image" src={ImgFive} />
            </div>
        </div>
    </div>
  )
}

export default YourLearningPatner
