import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Komponen ini menerima props 'project' yang berisi data satu project
const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform border border-gray-100">

            {/* Bagian Gambar */}
            <div className="relative h-48 overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gelap saat hover (opsional, agar estetik) */}
                <div className="absolute inset-0 bg-black/0  group-hover:bg-black/20 transition-all duration-300"></div>
            </div>

            {/* Bagian Konten */}
            <div className="p-6">
                {/* Judul Project */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                    {project.title}
                </h3>

                {/* Ikon Teknologi Kecil */}
                <div className="flex gap-3 mb-4 text-gray-600 text-xl">
                    {project.techIcons.map((icon, idx) => (
                        <span key={idx} title="Tech Stack">{icon}</span>
                    ))}
                </div>

                {/* Deskripsi Singkat (Dipotong agar rapi) */}
                <p className="text-gray-600 mb-6 text-sm line-clamp-2">
                    {project.description}
                </p>

                {/* Tombol Aksi */}
                <div className="flex items-center justify-between mt-auto">
                    {/* Tombol Detail (Penting: Menggunakan Link Router) */}
                    <Link
                        to={`/project/${project.id}`}
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                        Lihat Detail
                    </Link>

                    {/* Link Cepat ke Github/Demo (Icon only) */}
                    <div className="flex gap-3">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black transition text-xl"
                            title="Source Code"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={project.deployLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition text-lg"
                            title="Live Demo"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;