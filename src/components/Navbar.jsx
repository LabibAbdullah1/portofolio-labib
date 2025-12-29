import { useState } from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link untuk navigasi aman
import { FaBars, FaTimes } from 'react-icons/fa'; // Icon hamburger menu

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Fungsi agar saat link diklik di mobile, menu menutup
    const handleScroll = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/80 shadow-md top-0 left-0">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo / Nama */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    PortofolioSaya
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-8 font-medium">
                    <a href="#home" className="hover:text-blue-500 transition">Home</a>
                    <a href="#about" className="hover:text-blue-500 transition">About</a>
                    <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
                    <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                    <a href="#certificates" className="hover:text-blue-500 transition">Certificates</a>
                    <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
                </div>

                {/* Menu Mobile (Hamburger) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Dropdown Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full left-0 px-4 pb-4 flex flex-col space-y-3">
                    {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => handleScroll(item)}
                            className="block py-2 capitalize hover:text-blue-600"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;