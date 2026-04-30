import leahPng from "../assets/Leah.png"
import colinPng from "../assets/Colin.png"
import miguelPng from "../assets/Miguel.png"
import simonPng from "../assets/Simon.png"
import stevenPng from "../assets/Steven.png"
import { FaInstagram, FaFacebookSquare, FaTwitter, FaDribbble, FaSkype, FaGit } from "react-icons/fa"
import { BiLogoMediumOld } from "react-icons/bi"

const Teams = () => {
  return (
    <div className="bg-[#2F1893] w-ful h-full pl-28.75 py-25 ">
        <div className="flex flex-col min-h-screen gap-17.5">
            {/* Text Crew  */}
            <div className="flex flex-col text-white font-sans w-188.5 gap-7.75">
                <div className="font-bold text-[42px]">Startup Crew</div>
                <div className="text-[22px]">The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</div>
            </div>
            {/* Crew Profile */}
            <div className="flex flex-col text-white gap-15">
                {/* Row-1 */}
                <div className="flex flex-row gap-36.5">
                    {/* Profile-1  */}
                    <div className="flex flex-col">
                        <div className="mb-4.25"><img src={leahPng} alt="Leah" /></div>
                        <div className="text-[22px] mb-2">Leah Salomon</div>
                        <div className="text-[16px]">UI Designer</div>
                        <div className="flex flex-row mt-5 gap-7.5">
                            <div><FaTwitter/></div>
                            <div><FaFacebookSquare/></div>
                            <div><FaDribbble/></div>
                            <div><FaInstagram /></div>
                        </div>
                    </div>
                    {/* Profile-2  */}
                    <div className="flex flex-col">
                        <div className="mb-4.25"><img src={colinPng} alt="Leah" /></div>
                        <div className="text-[22px] mb-2">Colin Timmons</div>
                        <div className="text-[16px]">UX Designer</div>
                        <div className="flex flex-row mt-5 gap-7.5">
                            <div><FaTwitter/></div>
                            <div><FaDribbble/></div>
                        </div>
                    </div>
                    {/* Profile-3  */}
                    <div className="flex flex-col">
                        <div className="mb-4.25"><img src={miguelPng} alt="Leah" /></div>
                        <div className="text-[22px] mb-2">Miguel Osborne</div>
                        <div className="text-[16px]">Front-end Developer</div>
                        <div className="flex flex-row mt-5 gap-7.5">
                            <div><FaSkype/></div>
                            <div><BiLogoMediumOld/></div>
                            <div><FaGit/></div>
                        </div>
                    </div>
                </div>
                {/* Row-2 */}
                <div className="flex flex-row gap-36.5">
                    <div className="flex flex-col">
                        <div className="mb-4.25"><img src={simonPng} alt="Leah" /></div>
                        <div className="text-[22px] mb-2">Taylor Simon</div>
                        <div className="text-[16px]">Product Manager</div>
                        <div className="flex flex-row mt-5 gap-7.5">
                            <div><FaTwitter/></div>
                            <div><FaInstagram /></div>
                        </div>
                    </div>
                    {/* Profile-2  */}
                    <div className="flex flex-col">
                        <div className="mb-4.25"><img src={stevenPng} alt="Leah" /></div>
                        <div className="text-[22px] mb-2">Steven MacAlister</div>
                        <div className="text-[16px]">Copyrighter</div>
                        <div className="flex flex-row mt-5 gap-7.5">
                            <div><FaTwitter/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Teams