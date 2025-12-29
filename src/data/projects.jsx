import { FaLaravel, FaDatabase } from "react-icons/fa";
import { SiGo, SiMysql, SiTailwindcss, SiBootstrap } from "react-icons/si";

export const projectsData = [
    {
        id: 1,
        title: "Vibessense-AI",
        image: "vibesImg.png",
        dimage: "../vibesImg.png",
        techIcons: [<FaLaravel />, <FaDatabase />, <SiTailwindcss/>],
        techStack: ["Laravel 12", "MySQL", "Tailwind", "Blade"],
        description: "Aplikasi untuk membuat catatan diary dan analisis mood yang terintegrasi oleh KA.",
        text: "Dalam pengembangan aplikasi ini, tantangan utamanya adalah mengintegrasikan API pihak ketiga dan memastikan performa tetap cepat. Kami mengatasinya dengan menerapkan caching data.",
        date: "Desember 2024",
        collaborators: ["Saya (Backend)", "Teman A (Frontend)"],
        deployLink: "https://vibessenseai-fasilkom.unilak.ac.id",
        githubLink: "https://github.com/LabibAbdullah1/VibesenseAi",
    },
];