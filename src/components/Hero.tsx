'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import cursor from "@/assets/icon1.png";
import lightning from "@/assets/icon2.png";
import profilepic from "@/assets/profilepic.png";

const Hero = () => {
  return (
    <div
      className='py-16 md:py-24 relative overflow-clip'
      style={{ background: 'linear-gradient(to bottom, #000, #2B1942 35%, #8F5C55 60%, #DBAF6E 80%)' }}
    >
      {/* Background Circle */}
      <div className='absolute rounded-full w-[1500px] h-[1500px] md:w-[3000px] md:h-[3000px] top-[450px] md:top-[550px] left-1/2 -translate-x-1/2
      bg-[radial-gradient(closest-side,#000_80%,#2b1942)]'>
      </div>

      <div className='relative flex flex-col items-center'>
        {/* Title Text with Increased Z-Index */}
        <div className='text-4xl md:text-6xl lg:text-8xl font-bold text-center mt-12 md:mt-0 z-10'>
          <h1 className='text-[#98B4CE]'>Hi, I am</h1>
          <h1 className='text-[#E48A57]'>RamKumar Raghuwanshi</h1>
        </div>

        {/* Draggable Icons with Left and Right Entrance */}
        <motion.div
          className='hidden md:block absolute left-[50px] md:left-[280px] top-[70px] md:top-[170px] z-0'
          drag
          dragConstraints={{ top: -50, left: -100, right: 100, bottom: 100 }} // Restrict drag area
          initial={{ opacity: 0, x: -100 }}  // Animate from the left
          animate={{ opacity: 1, x: 0 }}     // Move to final position
          transition={{ duration: 1, delay: 0.5 }}  // Smooth transition with delay
        >
          <Image
            src={cursor}
            height={150}
            width={150}
            alt="cursor"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className='hidden md:block absolute right-[50px] md:right-[280px] top-[70px] md:top-[170px] z-0'
          drag
          dragConstraints={{ top: -50, left: -100, right: 100, bottom: 100 }} // Restrict drag area
          initial={{ opacity: 0, x: 100 }}  // Animate from the right
          animate={{ opacity: 1, x: 0 }}    // Move to final position
          transition={{ duration: 1, delay: 1 }}  // Smooth transition with delay
        >
          <Image
            src={lightning}
            height={100}
            width={100}
            alt="lightning"
            draggable="false"
          />
        </motion.div>

        {/* Description Text */}
        <p className='text-center text-lg md:text-xl max-w-[500px] mx-4 md:mx-auto mt-8 md:mt-12 text-white/80'>
          I am a full-stack developer focused on creating websites that provide the best experience for users.
        </p>

        {/* Profile Image */}
        <div className='mt-8 md:mt-16 w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80'>
          <Image
            src={profilepic}
            alt="profile picture"
            className='h-full w-full rounded-full object-cover mx-auto border-4 border-[#E48A57]'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
