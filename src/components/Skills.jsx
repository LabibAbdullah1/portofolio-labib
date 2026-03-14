import React from 'react';
import { motion } from 'framer-motion';
import { FaLaravel, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiJavascript, SiTypescript, SiFramer, SiVite } from 'react-icons/si';

const SkillBadge = ({ icon: Icon, name, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 transition-colors group"
  >
    <Icon className={`w-4 h-4 transition-colors ${color}`} />
    <span className="text-xs font-medium text-neutral-300 group-hover:text-white">{name}</span>
  </motion.div>
);

export const Skills = () => {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        { name: "Laravel", icon: FaLaravel, color: "group-hover:text-[#FF2D20]" },
        { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
        { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-[#339933]" },
        { name: "Python", icon: FaPython, color: "group-hover:text-[#3776AB]" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "group-hover:text-[#61DAFB]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
        { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
        { name: "Framer Motion", icon: SiFramer, color: "group-hover:text-[#0055FF]" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Vite", icon: SiVite, color: "group-hover:text-[#646CFF]" },
        { name: "Git", icon: FaGitAlt, color: "group-hover:text-[#F05032]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Technical Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold border-l-2 border-white/20 pl-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, sIdx) => (
                <SkillBadge key={sIdx} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};