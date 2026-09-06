'use client';
import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { dataMap } from '.././dateSectionOne'
const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const WorldMapUsers = () => {
  const [mounted, setMounted] = useState(false);
  // داتا user
  const { regionsData, countAndPres } = dataMap();


  const [selectedRegion, setSelectedRegion] = useState(regionsData[3]); // أفريقيا افتراضياً

  // تفعيل الأنيميشن بعد تحميل الكومبوننت
  useEffect(() => {
    setMounted(true);
  }, []);

  // حساب أعلى مستخدمين للنسبة المئوية
  const maxUsers = Math.max(...regionsData.map(r => r.users));
  const currentPercentage = selectedRegion.users / maxUsers;

  return (
    <div className="relative mx-[1%] mt-[1.5%] w-[98%] h-[350px] lg:h-[650px] bg-[#1E1F2033] rounded-[12px] overflow-hidden border-[.6px] border-[#1E1F20] shadow-2xl flex flex-col lg:flex-row items-center px-6 py-2 gap-8">

      {/* قسم القائمة الجانبية (النسب المئوية) */}
      <div className="w-full lg:w-[350px]  flex flex-col gap-6 z-10">

        <p className='text-[#fff] text-[16px] font-Poppins font-[500]'>Which countries are our visitors from ?</p>

        <div className='flex items-center gap-[15px]'>
          <p className='text-[24px] font-[600] font-Poppins text-[#fff]'>
            {countAndPres.total}
          </p>
          <span className='w-[47px] flex gap-[4px] h-[18px] rounded-[2px] flex justify-center items-center text-[10px] whitespace-nowrap text-[#14CA74] font-[500] bg-[#05C16833] border-[.6px] border-[#05C16833]'>
           <span> {countAndPres.percentage}% </span><img src={countAndPres.percentage > 0 ? '/img/upIcon.svg' : ''}></img>
          </span>
        </div>


        <div className="flex flex-col gap-6">

          {regionsData.map((i, index) => {
            // حساب نسبة كل عنصر لوحده بالنسبة لأعلى قيمة
            const itemPercentage = (i.users / maxUsers) * 100;
            const isActive = selectedRegion.id === i.id;

            return (
              <div
                key={index}
                className="flex flex-col gap-2 cursor-pointer group"
                onClick={() => setSelectedRegion(i)}
              >
                {/* Meta Data: Name & Value */}
                <div className="flex justify-between items-center">
                  <span className={`text-[12px] tracking-[0.08em] uppercase font-medium transition-colors ${isActive ? 'text-[#00d2ff]' : 'text-white/60 group-hover:text-white'}`}>
                    {i.name}
                  </span>
                  <span className="text-[0.68rem] text-[#00d2ff] font-bold font-mono">
                    {((i.users / maxUsers) * 100).toFixed(0)}%
                  </span>
                </div>

                {/* Track */}
                <div className="h-[4px] w-full bg-[#0B1739] rounded-full overflow-hidden">
                  {/* Progress Bar */}
                  <div
                    className="h-full bg-gradient-to-r from-[#14CA74] to-[#3751F9] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      // النسبة المئوية محسوبة هنا ديناميكياً
                      width: mounted ? `${itemPercentage}%` : '0%'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* قسم الخريطة */}
      <div className="flex-1 w-full h-full relative ">
        <ComposableMap projectionConfig={{ scale: 200 }} className="w-full h-full">
          <defs>
            <linearGradient id="dots-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14CA74" />
              <stop offset="100%" stopColor="#3751F9" />
            </linearGradient>
          </defs>

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="transparent"
                  stroke="url(#dots-gradient)"
                  strokeWidth={1.5}
                  strokeDasharray="1 3"
                  style={{ default: { outline: "none" }, hover: { outline: "none" } }}
                />
              ))
            }
          </Geographies>

          {regionsData.map((region) => {
            const isActive = selectedRegion.id === region.id;
            return (
              <Marker key={region.id} coordinates={region.coordinates}>
                <g className="cursor-pointer" onClick={() => setSelectedRegion(region)}>
                  {isActive && <circle r={15} fill="#00d2ff" className="animate-ping opacity-25" />}
                  <circle
                    r={isActive ? 6 : 4}
                    fill={isActive ? "#00d2ff" : "#8b5cf6"}
                    className="transition-all duration-500"
                    style={{ filter: `drop-shadow(0 0 8px ${isActive ? "#00d2ff" : "#8b5cf6"})` }}
                  />
                </g>

                {isActive && (
                  <foreignObject x="-72" y="-180" width="200" height="200" className="overflow-visible pointer-events-none">
                    <div className="w-[144px] h-[138px] bg-[#1E1F20]/90 backdrop-blur-2xl rounded-[8px] border-[.6px] border-white/10 shadow-2xl flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                      <div className="relative w-28 h-28">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="56" cy="56" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="transparent" />
                          <circle
                            cx="56" cy="56" r="45"
                            stroke="#00d2ff"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray="283"
                            strokeDashoffset={283 * (1 - (region.users / maxUsers))}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-in-out"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-lg font-bold text-white tracking-tight">
                            {(region.users / 1000).toFixed(1)}K
                          </span>
                          <span className="text-[8px] text-gray-400 uppercase tracking-widest mt-1">
                            Users
                          </span>
                        </div>
                      </div>
                    </div>
                  </foreignObject>
                )}
              </Marker>
            );
          })}
        </ComposableMap>
      </div>
    </div>
  );
};

export default WorldMapUsers;