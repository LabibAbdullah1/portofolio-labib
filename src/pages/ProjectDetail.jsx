import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaUserFriends, FaCode } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Project not found</h2>
                <Link to="/" className="px-6 py-2 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-black text-white pt-32 pb-24 px-6"
        >
            <div className="max-w-6xl mx-auto">
                {/* Back Link */}
                <Link to="/#projects" className="inline-flex items-center text-neutral-500 hover:text-white mb-12 transition-colors group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Header Image & Info */}
                    <div className="lg:col-span-8">
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-12 group"
                        >
                            <img
                                src={project.dimage}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/1200x600?text=' + project.title;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </motion.div>

                        <div className="space-y-12">
                            <section>
                                <h1 className="text-5xl font-bold mb-6 tracking-tight">{project.title}</h1>
                                <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>
                            </section>

                            <section className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                                <h2 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
                                    <FaCode className="text-neutral-500" /> Challenges & Solutions
                                </h2>
                                <p className="text-neutral-400 leading-relaxed whitespace-pre-line text-lg">
                                    {project.text}
                                </p>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar: Technical Details */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="sticky top-32 p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl h-fit border-glow"
                        >
                            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold mb-10 pb-4 border-b border-white/10">
                                Project Overview
                            </h3>

                            <div className="space-y-10">
                                <div>
                                    <div className="flex items-center text-neutral-300 font-bold mb-3 gap-2 uppercase tracking-widest text-[10px]">
                                        <FaCalendarAlt className="text-blue-500" /> Completion Date
                                    </div>
                                    <p className="text-neutral-500 text-sm font-mono">{project.date}</p>
                                </div>

                                <div>
                                    <div className="flex items-center text-neutral-300 font-bold mb-3 gap-2 uppercase tracking-widest text-[10px]">
                                        <FaUserFriends className="text-green-500" /> Team
                                    </div>
                                    <ul className="space-y-2">
                                        {project.collaborators.map((person, idx) => (
                                            <li key={idx} className="text-neutral-500 text-sm">{person}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center text-neutral-300 font-bold mb-4 uppercase tracking-widest text-[10px]">
                                        Technologies
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-6">
                                    {project.deployLink && project.deployLink !== "=" && (
                                        <a
                                            href={project.deployLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-3 px-6 py-4 border border-white/10 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 transition-colors"
                                    >
                                        <FaGithub /> View Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;