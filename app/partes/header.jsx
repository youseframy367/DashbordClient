export default function Header() {
    const dateUser = {
        img: "/img/imgPerconal.svg",
        name: "Youssef Ramy",
        email: "yousseframy345@gmail.com"
    }

    const numCredits = 100;

    return (
       
     
        <header className="w-full h-[86px] bg-[#1E1F2033] flex items-center justify-between px-8 backdrop-blur-md fixed top-0 z-40">
            
            <div className="flex-1">
            </div>

            
            <div className="flex items-center gap-[15px]">
                
                {/* Credits Section */}
                <div className="flex items-center gap-[10px]">
                    <img src="/img/Credits.svg" alt="Credits" className="w-5 h-5" />
                    <p className="font-bold text-[12px] text-white">
                        {numCredits} Credits
                    </p>
                </div>

                {/* type mode icon  */}
                <button className="hover:opacity-80 transition-opacity cursor-pointer">
                    <img src="/img/seting.svg" alt="setting" />
                </button>

                {/* User Info */}
                <div className="flex items-center gap-[12px] border-l border-[#ffffff1a] pl-[10px]">
                    <img 
                        src={dateUser.img} 
                        alt={dateUser.name} 
                        className="w-[36px] h-[36px] rounded-full object-cover border border-[#ffffff33]" 
                    />
                    <div className="flex flex-col">
                        <p className="font-medium text-[12px] text-white font-cairo leading-none mb-1">
                            {dateUser.name}
                        </p>
                        <p className="text-[10px] font-normal text-[#f5f5f580] leading-none">
                            {dateUser.email}
                        </p>
                    </div>
                    {/* Arrow Icon */}
                    <img src="/img/CaretDown.svg" alt="arrow" className="w-[12px] h-[12px] cursor-pointer" />
                </div>
            </div>
        </header>
    )
}