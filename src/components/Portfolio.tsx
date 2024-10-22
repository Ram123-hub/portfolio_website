'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import project1 from "@/assets/proj1.jpg";
import project2 from "@/assets/proj2.jpg";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects, blogs, and resume.",
    devStack: "React, Next.js, Tailwind CSS",
    link: "https://portfolio.example.com",
    git: "https://github.com/username/portfolio-website",
    src: project1,
  },
  {
    title: "E-commerce Platform",
    desc: "A full-stack e-commerce application with payment integration and product management.",
    devStack: "Node.js, Express, MongoDB, React",
    link: "https://ecommerce.example.com",
    git: "https://github.com/username/ecommerce-platform",
    src: project2,
  },
  {
    title: "Chat Application",
    desc: "Real-time chat application with user authentication and message persistence.",
    devStack: "Socket.io, Node.js, React",
    link: "https://chatapp.example.com",
    git: "https://github.com/username/chat-application",
    src: project1,
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
                className='h-[250px] md:h-[350px] w-full max-w-[500px] object-cover border rounded border-gray-700'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
