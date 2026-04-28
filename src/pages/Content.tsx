const Content = () => {
  return (
    // Background
    <div className="bg-[url('./assets/sea-bg.png')] bg-black/90 bg-cover bg-center h-full w-full">
        {/* Kolom teks */}
        <div className="flex flex-col h-screen items-center justify-center text-center text-white gap-7.25">
                <div className="text-sm">FREE SAMPLE</div>
                <div className="text-[58px] font-semibold w-203.75">Powerful Generator and Free Figma Sources</div>
                <div className="text-lg w-193.75">
                    Startup Framework contains components and complex blocks which can easily be integrated 
                    into almost any design. All of the components are made in the same style, and can easily 
                    be integrated into projects, allowing you to create hundreds of solutions.
                </div>
        </div>
    </div>
  )
}

export default Content