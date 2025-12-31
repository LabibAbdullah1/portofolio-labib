import { FaLaravel } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import MosquittoIcon from "../components/icon/MosquittoIcon";

export const projectsData = [
    {
        id: 1,
        title: "Vibessense-AI",
        image: "vibesImg.png",
        dimage: "../vibesImg.png",
        techIcons: [<FaLaravel />, <SiMysql />, <SiTailwindcss />],
        techStack: ["Laravel 12", "MySQL", "Tailwind", "Blade"],
        description: "Aplikasi catatan diary dan analisis mood yang terintegrasi oleh KA.",
        text: "Dalam pengembangan aplikasi ini, tantangan utamanya adalah mengintegrasikan API pihak ketiga dan memastikan performa tetap stabil serta keamanan data pengguna tetap terjaga.",
        date: "07 Desember 2025",
        collaborators: ["Labib Abdullah (Backend)", "Leni Wahyuni (Backend)", "Refaldi Julidinsyah (Frontend)", "Muhammad Al-fajar (Frontend)"],
        deployLink: "https://vibessenseai-fasilkom.unilak.ac.id",
        githubLink: "https://github.com/LabibAbdullah1/VibesenseAi",
    },
    {
        id: 2,
        title: "IoT-Platform (Hydroponik)",
        image: "/images/iot-platform.png",
        dimage: "../images/iot-platform.png",
        techIcons: [<FaLaravel />, <SiMysql />, <SiTailwindcss />, <MosquittoIcon />],
        techStack: ["Laravel 12", "MySQL", "Tailwind", "Blade", "Mosquitto"],
        description: `Aplikasi Monitoring IOT Hidroponik Sistem ini adalah perangkat Internet of Things (IoT) yang berfungsi sebagai Sistem Pendukung Keputusan(Decision Support System) untuk petani hidroponik.Masalah utama dalam hidroponik skala kecil adalah kesulitan menentukan takaran nutrisi yang presisi ketika volume air di tandon berkurang akibat evaporasi.
                        Aplikasi ini masih berjalan di local`,
        text: "Dalam pengembangan Aplikasi ini tantangan yang saya adalah saat mengintegrasikan perangkat Iot supaya terhubung menggunakan mqtt protocol agar perangkat ESP32 dapat mengirim data ke ip local.",
        date: "31 Desember 2025",
        collaborators: ["Labib Abdullah"],
        deployLink: "=",
        githubLink: "=",
    },
    {
        id: 3,
        title: "Masjid APP",
        image: "/images/Web-Masjid-app.png",
        dimage: "../images/Web-Masjid-app.png",
        techIcons: [<FaLaravel />, <SiMysql />, <SiTailwindcss />,],
        techStack: ["Laravel 12", "MySQL", "Tailwind", "Blade","Breeze"],
        description: "Aplikasi Management Masjid, untuk mengelola data keuangan masjid, anggota, jadwal kegiatan masjid.",
        text: "Aplikasi ini dibuat guna sebagai tugas akhir dalam Bootcamp laravel batch 1.",
        date: "28 Agustus 2025",
        collaborators: ["Labib Abdullah"],
        deployLink: "=",
        githubLink: "https://github.com/LabibAbdullah1/Masjid-App",
    },
];