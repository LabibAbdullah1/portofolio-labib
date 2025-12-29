import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates'
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { certificates } from '../data/certificates';
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {

    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]); 

    return (
        <>
            {/* 1. Bagian Hero (Paling Atas) */}
            <Hero />

            {/* 2. Bagian About (Tentang Saya) */}
            <section id="about" className="py-20 bg-white/80 ">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Saya</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-8"></div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Halo! Saya adalah seorang mahasiswa Teknik Informatika yang memiliki passion besar
                            dalam dunia pengembangan perangkat lunak. Saya memulai perjalanan coding saya sejak tahun 2023
                            dan kini fokus menjadi Fullstack Developer.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Saya senang memecahkan masalah kompleks dan mengubahnya menjadi antarmuka yang sederhana
                            dan intuitif. Saat tidak sedang coding, saya biasanya mengeksplorasi teknologi baru
                            seperti Kecerdasan Artificial (KA) atau berkontribusi di proyek open source.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Bagian Skills */}
            <Skills />

            {/* 4. Bagian Projects */}
            <section id="projects" className="py-20 bg-gray-50/80">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Project Unggulan</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                        <p className="mt-4 text-gray-600">Beberapa hasil karya terbaik yang pernah saya kerjakan.</p>
                    </div>

                    {/* Grid untuk Kartu Project */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            // Kita panggil component ProjectCard dan kirim datanya
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Serticates */}
            <section id="certificates" className="pt-20 pb-12 bg-white/80">
                        <div className="container mx-auto px-4">
            
                            {/* Header Section */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Sertifikasi & Penghargaan</h2>
                                <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                                <p className="mt-4 text-gray-600">Bukti kompetensi dan pembelajaran berkelanjutan saya.</p>
                            </div>
            
                            {/* Grid Sertifikat */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certificates.map((cert) => (
                                    <Certificates key={cert.id} cert={cert} />
                                ))}
                            </div>
            
                        </div>
                    </section>
            

            {/* 5. Bagian Contact */}
            <section id="contact" className="py-20 bg-white/80">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Hubungi Saya</h2>
                    <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                        Tertarik untuk berkolaborasi atau sekadar ingin menyapa?
                        Jangan ragu untuk menghubungi saya melalui media sosial di bawah ini.
                    </p>

                    <div className="flex justify-center gap-6">
                        {/* Item Contact: Email */}
                        <a href="mailto:labibabdullahhasan@gmail.com" className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <FaEnvelope />
                            </div>
                            <span className="mt-2 text-gray-600 font-medium">Email</span>
                        </a>

                        {/* Item Contact: Instagram */}
                        <a href="https://instagram.com/LABIB_205" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl group-hover:bg-pink-600 group-hover:text-white transition-all">
                                <FaInstagram />
                            </div>
                            <span className="mt-2 text-gray-600 font-medium">Instagram</span>
                        </a>

                        {/* Item Contact: Github */}
                        <a href="https://github.com/LabibAbdullah1" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 text-2xl group-hover:bg-gray-800 group-hover:text-white transition-all">
                                <FaGithub />
                            </div>
                            <span className="mt-2 text-gray-600 font-medium">Github</span>
                        </a>

                        {/* Item Contact: LinkedIn */}
                        <a href="https://www.linkedin.com/in/labib-abdullah" target="_blank" rel="noreferrer" className="flex flex-col items-center group">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-2xl group-hover:bg-blue-700 group-hover:text-white transition-all">
                                <FaLinkedin />
                            </div>
                            <span className="mt-2 text-gray-600 font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;