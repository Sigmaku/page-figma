const ShowCase = () => {
  return (
    <div className="bg-[#2F1893] w-full h-282.5 pt-25">
        {/* Div Header */}
        <div className="flex flex-row justify-between max-h-screen w-[886.43px] text-white h-40 mx-auto mb-24">
            <div className="text-[42px] font-bold font-sans">Last Works</div>
            <div className="text-sm w-[115.43px] h-fit p-2 border border-gray-500 text-center rounded-3xl mt-5">View all Works</div>
        </div>
        {/* Parents Block  */}
        <div className="flex flex-row h-screen items-center justify-center w-[886.43px] mx-auto">
            <div className="grid grid-cols-2 gap-7.5">
                {/* Content */}
                <div className="w-[429.71px] h-92.75 text-white text-center mb-">
                    <div className="bg-[url('./assets/tempat.png')] w-[429.71px] h-70"></div>
                    <div className="font-mono text-sm mb-0.75 pt-7.5 ">UI KIT</div>
                    <div className="font-sans text-[22px]">Mozart Project</div>
                </div>
                <div className="w-[429.71px] h-92.75 text-white text-center mb-18.5">
                    <div className="bg-[url('./assets/jalan.png')] w-[429.71px] h-70"></div>
                    <div className="font-mono text-sm mb-0.75 pt-7.5">FRAMEWORK</div>
                    <div className="font-sans text-[22px]">Startup Framework 2.0</div>
                </div>
                <div className="w-[429.71px] h-92.75 text-white text-center">
                    <div className="bg-[url('./assets/gedung.png')] w-[429.71px] h-70"></div>
                    <div className="font-mono text-sm mb-0.75 pt-7.5">PHOTOS</div>
                    <div className="font-sans text-[22px]">From the Sky</div>
                </div>
                <div className="w-[429.71px] h-92.75 text-white text-center">
                    <div className="bg-[url('./assets/gang.png')] w-[429.71px] h-70"></div>
                    <div className="font-mono text-sm mb-0.75 pt-7.5">PICTURES</div>
                    <div className="font-sans text-[22px]">Air Forces</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ShowCase