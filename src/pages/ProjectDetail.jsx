import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';

const ProjectDetail = () => {
    // 1. Ambil ID dari parameter URL (misal: /project/1)
    const { id } = useParams();

    // 2. Cari data project yang ID-nya cocok
    // Kita pakai parseInt karena id dari URL berupa string, sedangkan di data berupa number
    const project = projectsData.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 3. Jika project tidak ditemukan (jaga-jaga user ketik url ngawur)
    if (!project) {
        return (
            <div className="min-h-screen bg-white/80 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Project tidak ditemukan</h2>
                <Link to="/" className="text-blue-600 hover:underline">Kembali ke Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/80 pt-24 pb-10">
            <div className="container mx-auto px-4">

                {/* Tombol Kembali */}
                <Link to="/#projects" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition">
                    <FaArrowLeft className="mr-2" /> Kembali ke Portfolio
                </Link>

                {/* Card Utama Detail Project */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">

                    {/* Header Gambar Besar */}
                    <div className="w-full h-64 md:h-96 relative">
                        <img
                            src={project.dimage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h1 className="text-4xl font-bold text-white text-center px-4">{project.title}</h1>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                            {/* Kolom Kiri: Deskripsi Utama */}
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang Project</h2>
                                <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                                    {project.description}
                                </p>

                                {/* Bagian Fitur / Penjelasan Tambahan (Bisa ditambah di data nanti) */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Tantangan & Solusi</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {project.text}
                                </p>
                            </div>

                            {/* Kolom Kanan: Detail Teknis & Info */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-fit">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Informasi Project</h3>

                                {/* Waktu Pengerjaan */}
                                <div className="mb-4">
                                    <div className="flex items-center text-gray-700 font-semibold mb-1">
                                        <FaCalendarAlt className="mr-2 text-blue-600" /> Tanggal Selesai
                                    </div>
                                    <p className="text-gray-600 ml-6">{project.date}</p>
                                </div>

                                {/* Kolaborator */}
                                <div className="mb-4">
                                    <div className="flex items-center text-gray-700 font-semibold mb-1">
                                        <FaUserFriends className="mr-2 text-green-600" /> Kolaborator
                                    </div>
                                    <ul className="ml-6 list-disc text-gray-600 text-sm pl-4">
                                        {project.collaborators.map((person, idx) => (
                                            <li key={idx}>{person}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-700 mb-2">Teknologi yang Digunakan:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Tombol Aksi */}
                                <div className="flex flex-col gap-3">
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Kunjungi Website
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <FaGithub className="mr-2" /> Source Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;