import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import FramerMagnatic from "./FramerMagnatic";

const SocialIcon = () => {
  return (
    <div className="">
      <div className="mx-16 top-2/3 fixed z-10">
        <div className="flex flex-col gap-5 text-xl text-[#B7AB98]">
          <div className=" z-10 ">
            <FramerMagnatic>
              <SiGithub className="text-4xl p-2 hover:text-[#0d0d0d]" />
            </FramerMagnatic>
          </div>

          <div className=" z-10">
            <FramerMagnatic>
              <FaLinkedinIn className="text-4xl p-2 hover:text-[#0d0d0d]" />
            </FramerMagnatic>
          </div>

          <div className="z-10">
            <FramerMagnatic>
              <RiInstagramFill className="text-4xl p-2 hover:text-[#0d0d0d]" />
            </FramerMagnatic>
          </div>
        </div>
      </div>
      <div className="fixed -rotate-90 top-[74%] right-0 mr-5 z-10 cursor-pointer">
        <a
          href="https://drive.google.com/uc?export=download&id=1cMkJnMeF4_Ej2ehAmtJ_uVdrzuQLwDHs"
          className=" text-right mt-[40px] text-sm resume text-[#5C564C] hover:text-[#B7AB98]"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
