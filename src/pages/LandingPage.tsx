import { FaDribbble, FaCircle } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward, IoIosRadioButtonOff } from "react-icons/io";

const LandingPage = () => {
  return (
    <div className="bg-[url('./assets/mountain-bg.png')] bg-black/90 bg-cover h-full w-full pt-21.25 pb-42 px-28.75">
        <div className="flex flex-col min-h-screen w-292.5 gap-35.5">
            {/* navbar */}
            <div className="flex flex-row justify-center items-end text-[18px] gap-10.75 w-117.5 mx-auto text-white">
                <div className="opacity-50">Home</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>Blog</div>
                <div className="mb-0.75"><FaDribbble/></div>
                <div>Bē</div>
            </div>
            {/* hero text */}
            <div className="flex flex-row justify-between w-full text-white ">
                <div className="mt-24 text-[30px] opacity-50"><IoIosArrowBack/></div>
                <div className="flex flex-col items-center w-184 h-64.25 gap-7">
                    <div className="font-bold text-[20px]">Startup 3</div>
                    <div className="text-[72px] font-semibold tracking-tight">Forget About Code</div>
                    <div className="text-center text-[22px] tracking-wide">Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </div>
                </div>
                <div className="mt-24 text-[30px]"><IoIosArrowForward/></div>
            </div>
            {/* circle & button*/}
            <div className="flex flex-col gap-14.5 -mt-12">
                <div className="flex flex-row justify-center text-[12px] w-22.75 mx-auto text-white gap-2">
                    <div><FaCircle/></div>
                    <div><IoIosRadioButtonOff/></div>
                    <div><IoIosRadioButtonOff/></div>
                    <div><IoIosRadioButtonOff/></div>
                    <div><IoIosRadioButtonOff/></div>
                </div>
                <div className="mx-auto w-57.5 h-15 py-4 bg-indigo-600 rounded-4xl text-center text-[18px] text-white ">
                    Create an Account
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage