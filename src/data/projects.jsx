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
        description: "Sistem Monitoring Hidroponik berbasis IoT yang berfungsi sebagai Sistem Pendukung Keputusan (DSS). Solusi ini dirancang untuk mengatasi masalah ketidakakuratan takaran nutrisi akibat evaporasi air pada tandon. Saat ini sistem berjalan pada lingkungan lokal (Localhost) untuk simulasi dan pengujian data sensor real-time.",
        text: "Tantangan terbesar dalam proyek ini adalah membangun komunikasi data yang stabil antara hardware (ESP32) dan server lokal. Menggunakan protokol MQTT, saya harus memastikan konfigurasi Broker dan IP Address terkalibrasi dengan benar agar data sensor dapat dikirim secara realtime tanpa delay yang signifikan di jaringan lokal.",
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
        description: "Sistem Informasi Manajemen Masjid yang dirancang untuk digitalisasi operasional takmir. Fitur utamanya mencakup transparansi pencatatan kas (pemasukan & pengeluaran), manajemen database anggota/jamaah, serta penyusunan jadwal kegiatan dakwah yang terstruktur.",
        text: "Sebagai Final Project di Bootcamp Laravel, tantangan utamanya adalah mengimplementasikan konsep Relational Database yang kompleks antara data keuangan dan kegiatan. Saya juga berfokus menerapkan fitur CRUD yang aman serta validasi data yang ketat sesuai standar framework Laravel.",
        date: "28 Agustus 2025",
        collaborators: ["Labib Abdullah"],
        deployLink: "=",
        githubLink: "https://github.com/LabibAbdullah1/Masjid-App",
    },
];