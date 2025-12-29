import { FaLaravel } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

export const projectsData = [
    {
        id: 1,
        title: "Vibessense-AI",
        image: "vibesImg.png",
        dimage: "../vibesImg.png",
        techIcons: [<FaLaravel />, <SiMysql />, <SiTailwindcss/>],
        techStack: ["Laravel 12", "MySQL", "Tailwind", "Blade"],
        description: "Aplikasi catatan diary dan analisis mood yang terintegrasi oleh KA.",
        text: "Dalam pengembangan aplikasi ini, tantangan utamanya adalah mengintegrasikan API pihak ketiga dan memastikan performa tetap stabil serta keamanan data pengguna tetap terjaga.",
        date: "07 Desember 2024",
        collaborators: ["Labib Abdullah (Backend)", "Leni Wahyuni (Backend)", "Refaldi Julidinsyah (Frontend)","Muhammad Al-fajar (Frontend)"],
        deployLink: "https://vibessenseai-fasilkom.unilak.ac.id",
        githubLink: "https://github.com/LabibAbdullah1/VibesenseAi",
    },
];