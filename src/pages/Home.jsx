import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { CertificateCard } from '../components/CertificateCard';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { projectsData } from '../data/projects';
import { certificates } from '../data/certificates';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  Layers,
  Award,
  Terminal
} from 'lucide-react';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    // Helper for sorting certificates by date (Indonesian month names)
    const monthMap = {
        'Januari': 0, 'Februari': 1, 'Maret': 2, 'April': 3, 'Mei': 4, 'Juni': 5,
        'Juli': 6, 'Agustus': 7, 'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11
    };

    const parseDate = (dateStr) => {
        if (!dateStr) return new Date(0);
        const parts = dateStr.trim().split(' ');
        if (parts.length !== 3) return new Date(0);
        const [day, month, year] = parts;
        return new Date(parseInt(year), monthMap[month] || 0, parseInt(day));
    };

    const sortedCertificates = [...certificates].sort((a, b) => 
        parseDate(b.date) - parseDate(a.date)
    );

    const sortedProjects = [...projectsData].sort((a, b) => 
        parseDate(b.date) - parseDate(a.date)
    );

    return (
        <div className="pb-24">
            <Hero />

            {/* Tech Stack Horizontal Glow */}
            <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 -mt-12">
                <Code2 className="w-10 h-10 hover:text-blue-400 transition-colors" />
                <Layers className="w-10 h-10 hover:text-purple-400 transition-colors" />
                <Cpu className="w-10 h-10 hover:text-red-400 transition-colors" />
                <Globe className="w-10 h-10 hover:text-green-400 transition-colors" />
                <Zap className="w-10 h-10 hover:text-yellow-400 transition-colors" />
            </div>

            {/* About Section */}
            <section id="about" className="max-w-4xl mx-auto px-6 text-center mt-32">
                <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-neutral-500 mb-8">
                    The Developer
                </div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">Evolving through <span className="shimmer-text">code and creativity</span>.</h2>
                <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                    <p>
                        I'm a Computer Science student with a deep passion for building scalable and elegant software. 
                        Since 2023, I've been focused on mastering the art of full-stack development.
                    </p>
                    <p>
                        I thrive on solving complex problems and translating them into seamless user experiences. 
                        When I'm not coding, you'll find me exploring Artificial Intelligence or designing high-performance digital architectures.
                    </p>
                </div>
            </section>

            <div className="mt-40">
                <Skills />
            </div>

            {/* Projects Bento Grid */}
            <section id="projects" className="max-w-7xl mx-auto px-6 mt-40">
                <div className="flex items-center gap-4 mb-16">
                    <Terminal className="w-6 h-6 text-neutral-500" />
                    <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                    <div className="h-px flex-1 bg-white/10 ml-4" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
                    {sortedProjects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            {...project} 
                            tags={project.techStack}
                            span={index === 0 ? "md:col-span-2 md:row-span-2" : index === 1 ? "md:col-span-2" : "md:col-span-2"}
                        />
                    ))}
                </div>
            </section>

            {/* Certificates Section */}
            <section id="certificates" className="max-w-7xl mx-auto px-6 mt-40">
                <div className="flex items-center gap-4 mb-16">
                    <Award className="w-6 h-6 text-neutral-500" />
                    <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
                    <div className="h-px flex-1 bg-white/10 ml-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedCertificates.map((cert) => (
                        <CertificateCard key={cert.id} {...cert} />
                    ))}
                </div>
            </section>

            <div className="mt-40">
                <Contact />
            </div>
        </div>
    );
};

export default Home;