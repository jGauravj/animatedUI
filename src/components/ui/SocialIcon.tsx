import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialIcon = () => {
  return (
    <div className="absolute mx-16 top-2/3">
      <div className="flex flex-col gap-9 text-xl text-[#B7AB98]">
        <SiGithub />
        <FaLinkedinIn />
        <RiInstagramFill />
      </div>
    </div>
  );
};

export default SocialIcon;
