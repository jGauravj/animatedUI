"use client";
import Navbar from "@/components/ui/Navbar";
import SocialIcon from "@/components/ui/SocialIcon";
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <section>
      <div className="bg-[#101010]  h-screen  ">
        <motion.div
          className="mask w-full h-screen flex flex-col items-center justify-center "
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          }}
        >
          <div className="flex flex-col justify-center text-center ">
            <h1
              className="text-[14.22px] name  text-[#0D0D0D] mb-3 cursor-pointer "
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              GAURAV JANGIR
            </h1>
            <h1
              className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#0D0D0D] cursor-pointer"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              COPY
            </h1>
            <h1
              className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#0D0D0D] cursor-pointer "
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              PASTE
            </h1>
            <h1
              className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#0D0D0D] cursor-pointer "
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              REPEAT
            </h1>
            <h1
              className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#0D0D0D] cursor-pointer"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              SINCE
            </h1>
            <h1
              className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#0D0D0D] cursor-pointer "
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              2022
            </h1>
          </div>
        </motion.div>

        <div className="main w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[14.22px] name text-[#B7AB98] mb-3 ">
              GAURAV JANGIR
            </h1>
            <h1 className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#B7AB98]">
              CODE
            </h1>
            <h1 className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#EB5939]">
              CREATE
            </h1>
            <h1 className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#EB5939]">
              INSPIRE
            </h1>
            <h1 className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#B7AB98]">
              SINCE
            </h1>
            <h1 className="text-[124.44px] tracking-tight leading-[0.83] font-bold text-[#B7AB98]">
              2022
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
