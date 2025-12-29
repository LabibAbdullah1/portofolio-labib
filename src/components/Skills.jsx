import { FaLaravel, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import { SiGo, SiMysql, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Skills = () => {
    // Kita buat array data skill di sini agar kodingan HTML-nya bersih
    const skills = [
        { name: "Laravel", icon: <FaLaravel />, color: "text-red-600" },
        { name: "React JS", icon: <FaReact />, color: "text-blue-400" },
        { name: "Golang", icon: <SiGo />, color: "text-cyan-600" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    ];

    return (
        <section id="skills" className="py-20 bg-white/80">
            <div className="container mx-auto px-4">

                {/* Judul Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="mt-4 text-gray-600">Teknologi yang sering saya gunakan dalam pengembangan.</p>
                </div>

                {/* Grid Skills */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center justify-center group hover:bg-blue-50 cursor-default"
                        >
                            {/* Icon dengan warna spesifik & efek membesar saat hover */}
                            <div className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;