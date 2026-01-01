import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Portofolio</h2>

                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/LabibAbdullah1" className="text-2xl hover:text-blue-400 transition"><FaGithub /></a>
                    <a href="https://instagram.com/LABIB_205" className="text-2xl hover:text-pink-500 transition"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/labib-abdullah" className="text-2xl hover:text-blue-600 transition"><FaLinkedin /></a>
                </div>

                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Labib Abdullah. Dibuat dengan React & Tailwind.
                </p>
            </div>
        </footer>
    );
};

export default Footer;