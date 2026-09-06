"use client";
import { useState } from "react";

export default function Slider({ isExpanded }) {

    const [indexActive,setIndexActive]=useState(0)
    const date = [
        { icon: "/img/HomeIconActive.png", title: "Dashboard" },
        { icon: "/img/Group.svg", title: "Analytics" },
        { icon: "/img/iconSectionThree.svg", title: "Users" },
        { icon: "/img/iconSectionFor.svg", title: "Orders" },
        { icon: "/img/iconSectionFife.svg", title: "Inventory" },
        { icon: "/img/iconSectionSix.svg", title: "Security" },
        { icon: "/img/iconSectionSiven.svg", title: "Settings" },
    ];

    return (
        <div className="h-full w-full font-Poppins shadow-[0px_8px_28px_0px_#0105114D] flex flex-col z-50 overflow-hidden">
            
            {/* Logo Section */}
            <div className={`w-full h-[100px] flex items-center ${isExpanded ? "px-6 justify-between" : "justify-center"}`}>
                <img src="/img/logo.svg" alt="logo" className="w-[37px] h-[37px]" />
                {isExpanded && <span className="text-white font-bold text-[14px] animate-fade-in whitespace-nowrap">EXCLUSIVE MOVIES LTD </span>}
            </div>

            {/* Divider */}
            <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#CCCCCC] to-transparent opacity-50 mx-auto"></div>

            {/* Navigation Links */}
            <div className={`flex flex-col mt-[30px] gap-[25px] w-full ${isExpanded ? "px-4" : "items-center"}`}>
                {date.map((i, index) => {
                    const isActive = indexActive === index;
                    return(
                    <div 
                        key={index} 
                        onClick={()=>{setIndexActive(index)}}
                        className={`flex p-2 items-center group cursor-pointer transition-all duration-200 
                     
${isExpanded ? "justify-between w-full" : "justify-center w-[50px]"}
    
    ${isExpanded && isActive 
        ? "bg-[#ffffff15] border-l-[5px] border-[#3751F9] rounded-l-none" 
        : "border-l-[5px] border-transparent"
    }

    ${!isExpanded && isActive ? "bg-[#292A41] w-[44px] h-[44px] rounded-full" : ""}
`}
                  >
                        <div className="flex items-center gap-[15px]">
                            <img 
                                src={i.icon} 
                                alt={i.title} 
                                className={`w-[14px] h-[14px] group-hover:scale-110 transition-transform`} 
                            />
                            {isExpanded && (
                                <p className="text-[14px] font-[500] text-[#fff] whitespace-nowrap animate-slide-in">
                                    {i.title || `Section ${index + 1}`}
                                </p>
                            )}
                        </div>

                        {isExpanded && (
                            <img src="/img/CaretDown.svg" alt="arrow" className="w-[12px] h-[12px] opacity-40 group-hover:opacity-100" />
                        )}
                    </div>
                    )
                })}
            </div>

            {/* Bottom Divider & Logout */}
            <div className="mt-6 mb-6 flex flex-col items-center gap-6">
                {isExpanded ?(
                    <div className="flex flex-col w-[100%]  gap-[20px]">
                    <div className="w-[100%] h-[.5px] border-hidden bg-[#aaaaaa]"></div>
                    <div className=" flex flex-start  gap-[10px] items-center pl-7 cursor-pointer">
                        <img src="/img/iconLogOut.svg" className="w-[14px] h-[14px]" alt="logout" />
                        <p className="font-[500] text-[14px] text-[#CF1D20]">Log Out</p>
                    </div>
                    </div>
                ):(
                    <div className="flex flex-col gap-[20px]">
                <div className="w-[44px] h-[1px] bg-gradient-to-r from-transparent via-[#CCCCCC] to-transparent opacity-50"></div>

                    <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#CF1D20] to-[#690F10] cursor-pointer hover:scale-105 transition-transform p-0 shadow-lg shadow-[#cf1d2033]">
                        <img src="/img/iconLogOut.svg" className="w-[14px] h-[14px]" alt="logout" />
                    </div>
                   </div> 
                )}
             
            </div>
        </div>
    );
}