import { FaCheck } from "react-icons/fa"
import { BiDollar } from "react-icons/bi"

const PricingTable = () => {
  return (
    // background
    <div className="bg-[url('./assets/bg-pricing.png')] bg-black/60 bg-cover py-25 px-28.5 w-full h-full">
        <div className="flex flex-col min-h-screen items-center justify-center gap-13.5">
            {/* Text Pricing */}
            <div className="flex flex-col text-white font-sans text-center w-146.5 gap-7.5">
                <div className="text-[42px] font-bold">Plans & Pricing</div>
                <div className="text-[22px]">Startup Framework is free forever — you only pay for custom domain hosting or to export your site.</div>
            </div>
            {/* Pricing Card */}
            <div className="flex flex-warp justify-center text-white font-sans gap-7.5">
                {/* Card-1 */}
                <div className="flex flex-col border border-gray-400 w-92.5 h-182.5 rounded-xl p-11">
                    <div className="flex flex-col gap-5.5">
                        <div className="text-[22px]">Starter</div>
                        <div className="flex flex-row items-end gap-2.5">
                            <div className="text-[58px] font-bold">9.99</div>
                            <BiDollar size={16} className="mb-12"/>
                        </div>
                    </div>
                    {/* biar ada jarak lah */}
                    <div className="flex flex-col pt-11.25 gap-2.5">
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">2 GB of Space</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">14 days of backups</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Social integrations</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Client billing</div>
                        </div>
                        <div className="flex flex-col gap-2.5 pl-8 text-gray-500">
                            <div>Remote access</div>
                            <div>Custom domain</div>
                            <div>24 Hours support</div>
                            <div>Admin tools</div>
                            <div>Collaboration tools</div>
                            <div>User management</div>
                        </div>
                    </div>
                    {/* Button  */}
                    <div className="mt-7.5 mx-auto font-semibold border border-gray-400 w-57.5 h-15 rounded-4xl py-4.25 text-center text-xl hover:bg-pink-500 hover:border hover:border-pink-500">
                        Get Started
                    </div>
                </div>
                {/* Card-2 */}
                <div className="flex flex-col border border-gray-400 w-92.5 h-182.5 rounded-xl p-11">
                    <div className="flex flex-col gap-5.5">
                        <div className="text-[22px]">Professional</div>
                        <div className="flex flex-row items-end gap-2.5">
                            <div className="text-[58px] font-bold">19.99</div>
                            <BiDollar size={16} className="mb-12"/>
                        </div>
                    </div>
                    {/* biar ada jarak lah */}
                    <div className="flex flex-col pt-11.25 gap-2.5">
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">2 GB of Space</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">14 days of backups</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Social integrations</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Client billing</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Remote access</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Custom domain</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">24 Hours support</div>
                        </div>
                        <div className="flex flex-col gap-2.5 pl-8 text-gray-500">
                            <div>Admin tools</div>
                            <div>Collaboration tools</div>
                            <div>User management</div>
                        </div>
                    </div>
                    {/* Button  */}
                    <div className="mt-7.5 mx-auto font-semibold border border-gray-400 w-57.5 h-15 rounded-4xl py-4.25 text-center text-xl hover:bg-pink-500 hover:border hover:border-pink-500">
                        Get Started
                    </div>
                </div>
                {/* Card-3 */}
                <div className="flex flex-col border border-gray-400 w-92.5 h-182.5 rounded-xl p-11">
                    <div className="flex flex-col gap-5.5">
                        <div className="text-[22px]">Team</div>
                        <div className="flex flex-row items-end gap-2.5">
                            <div className="text-[58px] font-bold">49.99</div>
                            <BiDollar size={16} className="mb-12"/>
                        </div>
                    </div>
                    {/* biar ada jarak lah */}
                    <div className="flex flex-col pt-11.25 gap-2.5">
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">2 GB of Space</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">14 days of backups</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Social integrations</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Client billing</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Remote access</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Custom domain</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">24 Hours support</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Admin tools</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">Collaboration tools</div>
                        </div>
                        <div className="flex flex-row gap-3.75">
                            <FaCheck size={16} color="lime"/>
                            <div className="text-[16px]">User management</div>
                        </div>
                    </div>
                    {/* Button  */}
                    <div className="mt-7.5 mx-auto font-semibold border border-gray-400 w-57.5 h-15 rounded-4xl py-4.25 text-center text-xl hover:bg-pink-500 hover:border hover:border-pink-500">
                        Get Started
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingTable