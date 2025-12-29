import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">PortofolioSaya</h2>

                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-2xl hover:text-blue-400 transition"><FaGithub /></a>
                    <a href="#" className="text-2xl hover:text-pink-500 transition"><FaInstagram /></a>
                    <a href="#" className="text-2xl hover:text-blue-600 transition"><FaLinkedin /></a>
                </div>

                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Nama Kamu. Dibuat dengan React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;