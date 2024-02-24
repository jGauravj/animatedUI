import React from "react";

const Navbar = () => {
  return (
    <div className="mx-16">
      <div className=" flex justify-end ">
        <ul className=" absolute flex flex-col top-14">
          <li className="flex flex-col cursor-pointer h-[13.9px] font-bold text-right overflow-hidden group mb-[14px]">
            <span className="  leading-[0.99] transition ease-out duration-200 hover:opacity-5 group-hover:translate-y-[-100%] text-sm text-[#5C564C] ">
              ABOUT
            </span>
            <span className=" leading-[0.99] transition ease-out duration-200 text-sm text-[#B7AB98] group-hover:translate-y-[-100%]">
              ABOUT
            </span>
          </li>
          <li className="flex flex-col cursor-pointer h-[13.8px] font-bold text-right overflow-hidden group mb-[14px] ">
            <span className="  leading-[0.99] transition ease-out duration-200 hover:opacity-5 group-hover:translate-y-[-100%] text-sm text-[#5C564C] ">
              WORK
            </span>
            <span className=" leading-[0.99] transition ease-out duration-200 text-sm group-hover:translate-y-[-100%] text-[#B7AB98]">
              WORK
            </span>
          </li>
          <li className="flex flex-col cursor-pointer h-[13.8px] font-bold text-right overflow-hidden group ">
            <span className="  leading-[0.99] transition ease-out duration-200 text-[#5C564C] hover:opacity-5 group-hover:translate-y-[-100%] text-sm">
              CONTACT
            </span>
            <span className=" leading-[0.99] transition ease-out duration-200 text-sm  group-hover:translate-y-[-100%] text-[#B7AB98]">
              CONTACT
            </span>
          </li>
        </ul>
      </div>
      <div className="">
        <h1 className="absolute top-16">logo</h1>
      </div>
    </div>
  );
};

export default Navbar;
