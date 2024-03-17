"use client";

import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const smile = isHovered ? "(ㆆ◡ㆆ)" : "(ㆆ_ㆆ)";

  return (
    <div className="mx-16">
      <div className=" flex justify-end ">
        <ul className=" fixed flex flex-col top-14 z-10">
          <li className="flex flex-col cursor-pointer h-[13.9px] font-bold text-right overflow-hidden group mb-[14px] z-10 ">
            <span className="  leading-[0.99] transition ease-out duration-200 hover:opacity-5 group-hover:translate-y-[-100%] text-sm text-[#5C564C] ">
              ABOUT
            </span>
            <span className=" leading-[0.99] transition ease-out duration-200 text-sm text-[#B7AB98] group-hover:translate-y-[-100%]">
              ABOUT
            </span>
          </li>
          <li className="flex flex-col cursor-pointer h-[13.8px] font-bold text-right overflow-hidden group mb-[14px] z-10 ">
            <span className="  leading-[0.99] transition ease-out duration-200 hover:opacity-5 group-hover:translate-y-[-100%] text-sm text-[#5C564C] ">
              WORK
            </span>
            <span className=" leading-[0.99] transition ease-out duration-200 text-sm group-hover:translate-y-[-100%] text-[#B7AB98]">
              WORK
            </span>
          </li>
          <li className="flex flex-col cursor-pointer h-[13.8px] font-bold text-right overflow-hidden group z-10 ">
            <span className="  leading-[0.99] transition ease-out duration-200 text-[#5C564C] hover:opacity-5 group-hover:translate-y-[-100%] text-sm">
              CONTACT
            </span>
            <span className=" leading-[0.99] transition ease-out duration-200 text-sm  group-hover:translate-y-[-100%] text-[#B7AB98]">
              CONTACT
            </span>
          </li>
        </ul>
      </div>

      <div className=" z-10">
        <h1
          className="absolute top-[70px] text-xl text-[#B7AB98] font-bold z-10 cursor-pointer "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          {isHovered ? "(* ◡ *) " : "(>_<)"}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;

// (ㆆ◡ㆆ)
