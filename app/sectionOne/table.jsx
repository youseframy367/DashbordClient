"use client";

import Confirm from "../partes/confirm"
import { dateTale } from "./dateSectionOne";
import { useState } from "react";
export default function Table() {
const {data}=dateTale()

const [confirmMasegm , setConfirmMaseg]=useState(false)

  return (

    <div className="text-[#fff] bg-[#1E1F20] mx-[1%] mt-[2%] rounded-[14px] border border-[#aeb9e138] overflow-hidden">
      {confirmMasegm &&(
      <Confirm
        title="Confirm Action"
        subTitle="Are you sure you want to delete this item?"
        api='/deleteuser/${userId}'
        close={() => setConfirmMaseg(false)}      />     
       )}

      {/* Header */}
      <div className="p-[15px] flex justify-between items-center">

        <div className="flex flex-col gap-[5px]">

          <h2 className="font-[500] text-[22px] text-[#fff]">
            Recent Activations
          </h2>

          <p className="font-[500] text-[12px] text-[#ffffff7c]">
            Latest activation records and their status
          </p>

        </div>

        <button className="w-[114px] h-[32px] rounded-[8px] bg-[#131314] flex items-center justify-center gap-[10px] text-[10px] font-[500] text-[#fff] hover:bg-[#1b1b1d] transition-all duration-200">

          New Activation

          <img
            src="/img/user-add 1.svg"
            alt="icon"
          />

        </button>

      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto overflow-y-auto max-h-[400px] hide-scrollbar">

        <table className="w-full table-fixed border-collapse">

          {/* Table Head */}
          <thead className="sticky top-0 z-30 backdrop-blur-lg bg-[#13131440] text-[14px] font-[800] text-[#CB3CFF] h-[50px]">

            <tr>

              <th className="text-center">ID</th>

              <th className="text-center">App</th>

              <th className="text-center">User</th>

              <th className="text-center">DATE</th>

              <th className="text-center">STATUS</th>

              <th className="text-center">ACTION</th>

            </tr>

          </thead>

          {/* Table Body */}
          <tbody className="overflow-hidden">

            {data.map((item, index) => (

              <tr
                key={index}
                className="border-b border-[#aeb9e138] h-[60px] text-[14px] font-[400] hover:bg-[#ffffff05] hover:scale-[1.002] transition-all duration-200"
              >

                {/* ID */}
                <td className="text-center text-[#CF1D20]">
                  {item.id}
                </td>

                {/* App */}
                <td className="text-center">
                  {item.App}
                </td>

                {/* User */}
                <td className="text-center text-[#14CA74]">
                  {item.User}
                </td>

                {/* Date */}
                <td className="text-center text-[#00C2FF]">
                  {item.Date}
                </td>

                {/* Status */}
                <td className="text-center">

                  <div className="flex justify-center items-center">

                    <span
                      className={`w-[93px] h-[27px] rounded-[4px] flex justify-center items-center text-[11px] font-[500]
                      ${item.status === "Active"
                          ? "bg-[#05C16833] text-[#14CA74]"
                          : item.status === "Pending"
                            ? "bg-[#FFB54733] text-[#FFB547]"
                            : "bg-[#FF5A6533] text-[#FF5A65]"
                        }`}
                    >

                      {item.status}

                    </span>

                  </div>

                </td>

                <td className="text-center">

                  <div className="flex gap-[15px] justify-center items-center">

                    <img
                      src="/img/deleatIcon.svg"
                      alt="deleatIcon"
                      className="hover:scale-110 transition-all duration-200 cursor-pointer" 
                      onClick={()=> setConfirmMaseg(true)}
                      />

                    <img
                      src="/img/UpdateIcon.svg"
                      alt="updateIcon"
                      className="hover:scale-110 transition-all duration-200 cursor-pointer" />

                    <img
                      src="/img/showIcon.svg"
                      alt="showIcon"
                      className="hover:scale-110 transition-all duration-200 cursor-pointer" />

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}