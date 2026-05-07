import neXo from "../assets/nexora.png"
import { IoPersonCircleOutline, IoCartOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="bg-lime-50 w-full h-full p-2.5">
        <div className="flex flex-col min-h-screen gap-2">
            {/* header */}
            <div className="flex flex-row justify-between p-2 gap-10 bg-white rounded-[10px]">
                <div><img src={neXo} alt="logo" className="w-50 h-15 rounded-lg"/></div>
                <div className="flex flex-row gap-2">
                    <div><IoCartOutline className="w-15 h-15 my-0.5 text-white bg-lime-300 rounded-lg"/></div>
                    <div><IoPersonCircleOutline className="w-15 h-15 my-0.5 text-white bg-lime-300 rounded-lg"/></div>
                </div>
            </div>
            {/* body containt */}
            <div className="flex flex-col bg-white rounded-[10px] p-2.5 gap-7.5">
                {/* text */}
                <div className="group relative w-max cursor-pointer py-2">
                    <div className="font-bold text-2xl">Barang Tersedia</div>
                    <div className="absolute bottom-0 left-0 h-0.75 w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
                </div>
                {/* baris-card1 */}
                <div className="flex flex-row gap-12.5">
                    {/* card-item1 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                    {/* card-item2 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                    {/* card-item3 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                </div>
                {/* baris-card2 */}
                <div className="flex flex-row gap-12.5">
                    {/* card-item4 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                    {/* card-item5 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                    {/* card-item6 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                </div>
                {/* baris-card3 */}
                <div className="flex flex-row gap-12.5">
                    {/* card-item7 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                    {/* card-item8 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[8px] ">Halo ini genshin. Sebuah game open world yang menawarkan grafik realistis</div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                    {/* card-item9 */}
                    <div className="flex flex-col items-center bg-orange-100 h-50 w-35 rounded-[10px] gap-2 p-2 overflow-hidden">
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsJOs1V1HSMYaPrEDXz8aJHjX-gg-RJb62A&s" alt="" className="w-25 h-25"/></div>
                        <div className="text-[10px]">mama gufron LOVERS</div>
                        <div className="text-[8px] ">saya adalah penyuka mama gufron </div>
                        <div className="bg-lime-300 text-[8px] p-1 rounded-lg">About You</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard