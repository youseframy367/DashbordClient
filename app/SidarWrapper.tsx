"use client";

import Header from "./partes/header";
import Slider from "./partes/slider";
// ملاحظة: يفضل عدم استيراد BageStart هنا لتجنب تعارض الـ Routing في Next.js
// ولكن سأبقيها لك إذا كنت تستخدمها كـ Component احتياطي
import BageStart from "./page"; 
import { useState } from "react";

export default function MainLayout({ children }) {
  const [hoverSidbar, setHoverSidbar] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#000] overflow-x-hidden">
      
      <div className="fixed right-[-22%] top-[40%] bg-[rgba(0,66,206,0.3)] w-[493px] h-[287px] blur-[300px] pointer-events-none"></div>
      <div className="fixed left-[-22%] top-[80%] bg-[rgba(0,66,206,0.3)] w-[493px] h-[287px] blur-[300px] pointer-events-none"></div>

  
      <Header />

      <div className="flex h-full">
      
        <div
          className="fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out bg-[#1E1F20] shadow-xl"
          style={{ width: hoverSidbar ? '240px' : '74px' }}
         
          onMouseEnter={() => setHoverSidbar(true)}
          onMouseLeave={() => setHoverSidbar(false)}
        >
          
          <Slider isExpanded={hoverSidbar} />
        </div>

      
        <main 
          className="flex-1 p-6 transition-all duration-300 ease-in-out min-h-screen"
          style={{ 
        
            marginLeft: hoverSidbar ? '240px' : '74px',
            marginTop: '86px' 
          }}
        >
          {children ?? <BageStart />}
        </main>
      </div>
    </div>
  );
}