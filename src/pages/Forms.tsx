const Forms = () => {
  return (
    <div className="bg-[url('./assets/sea-bg.png')] bg-black/90 bg-cover h-full w-full px-54 py-25">
        <div className="flex flex-row min-h-screen w-242.5 h-137.5 gap-32.5">
            {/* Text samping */}
            <div className="flex flex-col text-white font-sans w-92.25 h-54.5 my-29 gap-8 leading-tight">
                <div className="font-bold text-[42px]">We solve digital problems with an outstanding creative flare</div>
                <div className="text-[16px]">We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</div>
            </div>
            {/* form */}
            <div className="flex flex-col gap-17.5 font-sans w-117.5 h-full bg-white rounded-xl">
              {/* sign up & login  */}
              <div className="flex flex-row pt-6.25 text-sm">
                <div className="flex flex-col text-center w-58.75 gap-4.25">
                  <div className="text-[#1E0E62]">SIGN UP</div>
                  <div className="bg-[#1E0E62] w-full h-0.75"></div>
                </div>
                <div className="flex flex-col text-center w-58.75 gap-4.25">
                  <div className="text-gray-500">LOGIN</div>
                  <div className="bg-gray-500 w-full h-0.75"></div>
                </div>
              </div>
              {/* Label input  */}
              <div className="flex flex-col w-82.5 h-82.5 mb-20 mx-17.5 gap-10">
                <div className="flex flex-col gap-7.5 text-gray-500">
                  <div className="border border-gray-500 py-3 pl-6 rounded-4xl">Your name</div>
                  <div className="border border-gray-500 py-3 pl-6 rounded-4xl">Your password</div>
                </div>
                <div className="flex flex-col text-center gap-7.5 text-white">
                  <div className="bg-[#25DAC5] py-3 rounded-4xl">Create an Account</div>
                  <div className="flex flex-warp justify-center gap-3.75">
                    <div className="bg-gray-500 w-35.5 h-0.5 mt-3.25 rounded-2xl"></div>
                    <div className="text-gray-500">or</div>
                    <div className="bg-gray-500 w-35.5 h-0.5 mt-3.25 rounded-2xl"></div>
                  </div>
                  <div className="bg-[#1DA1F2] py-3 rounded-4xl">Login via Twitter</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Forms