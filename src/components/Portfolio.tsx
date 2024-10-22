'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import portfolio from "@/assets/portfolio.png"
import organicStore from "@/assets/organicStore.png"
import imageGallery from "@/assets/imgaeGallery.png"
import journeyThroughTime from "@/assets/journeyThroughTime.png"
import petParade from "@/assets/petparade.png"

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects, blogs, and resume.",
    devStack: "React, Next.js, Tailwind CSS",
    link: "https://vercel.live/link/portfolio-website-one-ebon-60.vercel.app?via=project-dashboard-alias-list&p=1&page=/",
    git: "https://github.com/Ram123-hub/portfolio_website",
    src:portfolio,
  },
  {
    title: "organic Store",
    desc: "A full-stack e-commerce application with payment integration and product management.",
    devStack: "Next.js , MongoDB, TailwindCSS , ReduxDev Tool kit, Shadcn library",
    link: "https://vercel.live/link/organic-store-three-lovat.vercel.app?via=project-dashboard-alias-list&p=1&page=/",
    git: "https://github.com/Ram123-hub/organic_store",
    src: organicStore,
  },
  {
    title: "Image Gallery",
    desc: "The Image Gallery built in next js with the help of pexel API. You can search and download image from the gallery",
    devStack: "Next.js , Pexels API, TailwindCSS , ",
    link: "https://vercel.live/link/gallery-rouge-theta.vercel.app?via=project-dashboard-alias-list&p=1&page=/",
    git: "https://github.com/Ram123-hub/gallery",
    src: imageGallery,
  },
  {
    title: "Journey Through Time",
    desc: "Journey Through Time is an interactive web experience that allows users to explore significant historical events across different eras. Using engaging visuals and informative content, the project aims to bring history to life, making learning both fun and immersive. Perfect for history enthusiasts and curious learners alike.",
    devStack: "Next.js, MongoDB, TailwindCSS, Shadcn library",
    link: "https://vercel.live/link/journey-through-time-roan.vercel.app?via=project-dashboard-alias-list&p=1&page=/",
    git: "https://github.com/Ram123-hub/Journey-Through-Time",
    src: journeyThroughTime
  },
  {
    title: "pet parade",
    desc: "Pet Parade is a joyful platform dedicated to celebrating pets and their stories. Users can share heartwarming moments, get expert advice, and explore the unique adventures of animal companions. Whether you're a proud pet owner or just love animals, Pet Parade offers a welcoming community for all.",
    devStack: "Next.js , MongoDB, TailwindCSS , Shadcn library",
    link: "https://vercel.live/link/pet-parade.vercel.app?via=project-dashboard-alias-list&p=1&page=/",
    git: "https://github.com/Ram123-hub/pet-parade",
    src: petParade
  },
];

const Portfolio = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-12 md:py-18 mt-32 md:mt-52' id="portfolio">
      <h1 className='text-white text-3xl md:text-6xl mx-auto font-semibold text-center my-12 py-2'>
        Selected <span className='text-orange-400'>Projects</span>
      </h1>

      <div className='px-4 md:px-0 max-w-[1000px] mx-auto mt-16 space-y-24'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-12`}
          >
            <div className='space-y-4 text-center md:text-left max-w-[550px]'>
              <h2 className='text-4xl md:text-6xl text-white/70'>{`0${index + 1}`}</h2>
              <h3 className='text-2xl md:text-4xl font-semibold'>{project.title}</h3>
              <p className='text-lg md:text-xl text-white/70'>{project.desc}</p>
              <p className='text-lg md:text-xl text-orange-400 font-semibold'>{project.devStack}</p>
              <div className='w-32 h-[1px] bg-gray-400 my-4 mx-auto md:mx-0' />
              <div className='flex justify-center md:justify-start gap-4'>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-lg md:text-xl text-blue-400 underline'>Live Site</a>
                <a href={project.git} target="_blank" rel="noopener noreferrer" className='text-lg md:text-xl text-blue-400 underline'>GitHub</a>
              </div>
            </div>

            <div className='flex justify-center items-center w-full'>
              <Image
                src={project.src}
                alt={project.title}
                className='h-[250px] md:h-[350px] max-w-[500px] object-cover border rounded border-gray-700'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
