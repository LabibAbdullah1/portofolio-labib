// import profileImg from '../assets/profile.jpg'; // Pastikan filenya ada, atau komen baris ini
// Jika belum ada foto, pakai link placeholder di src img bawah

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50/80 pt-20 pb-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">

                {/* Bagian Teks */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-xl text-blue-600 font-semibold mb-2 ">Halo, Saya</h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                        Labib Abdullah
                    </h1>
                    <h3 className="text-2xl text-gray-600 font-medium mb-4">
                        Fullstack Developer & <br /> Mahasiswa Teknik Informatika
                    </h3>
                    <p className="text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
                        Membangun solusi digital yang efisien dan interaktif.
                        Fokus pada Golang, React, Laravel, dan pengembangan sistem skala menengah dan besar.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
                            Lihat Project
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                            Hubungi Saya
                        </a>
                    </div>
                </div>

                {/* Bagian Foto */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Efek Lingkaran di belakang foto */}
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-70 animate-pulse"></div>

                        {/* Foto Profil */}
                        <img
                            src="../images/profil.png" // Ganti dengan {profileImg} jika foto sudah ada
                            alt="Profile"
                            className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;