'use client';  // Ensure the component is a Client Component

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiRedux, SiMongodb, SiPostgresql, SiDocker, SiPrisma, SiExpress } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { BsUiRadiosGrid } from 'react-icons/bs';  // Example for Shadcn

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <SiNextdotjs size={140} />, label: "Next.js" },
    { icon: <SiTypescript size={140} />, label: "TypeScript" },
    { icon: <SiRedux size={140} />, label: "Redux Toolkit" },
    { icon: <SiMongodb size={140} />, label: "MongoDB" },
    { icon: <BsUiRadiosGrid size={140} />, label: "Shadcn" },
    { icon: <TbSql size={140} />, label: "SQL" },
    { icon: <SiPostgresql size={140} />, label: "PostgreSQL" },
    { icon: <SiDocker size={140} />, label: "Docker" },
    { icon: <SiPrisma size={140} />, label: "Prisma" },
    { icon: <SiExpress size={140} />, label: "Express" }
];

const Skills = () => {
    // Optional: Track if component is mounted
    const [mounted, setMounted] = useState(false);

    // Trigger the animation immediately when the component mounts
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className='bg-gradient-to-t from-black to-[#381a5f] py-32'>
            <div className='text-white w-[90%] md:max-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-4xl md:text-6xl font-bold mb-12'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {skillIcons.map((skill, index) => (
                        <motion.div
                            key={index}
                            className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200'
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: index % 3 === 0 ? 50 : 0 }}  // Reduced initial position for smoother entry
                            animate={mounted ? { opacity: 1, x: 0, y: 0 } : {}}  // Trigger the animation when component is mounted
                            transition={{ duration: 0.5, delay: index * 0.05 }}  // Reduce delay and duration for faster animations
                        >
                            {skill.icon}
                            <p className='mt-4 text-lg md:text-xl font-medium'>{skill.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
