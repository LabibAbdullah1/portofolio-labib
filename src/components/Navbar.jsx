import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '/#about' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Certificates', href: '/#certificates' },
        { name: 'Contact', href: '/#contact' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`relative flex items-center justify-between p-2 rounded-2xl border transition-all duration-500 ${scrolled
                        ? 'bg-black/40 border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                        : 'bg-transparent border-transparent'
                    }`}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group px-4">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <span className="text-black font-black text-xl">L</span>
                        </div>
                        <span className="text-white font-bold tracking-tighter text-xl">LABIB</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-1 left-5 right-5 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                            </a>
                        ))}
                        <div className="w-px h-6 bg-white/10 mx-2" />
                        <a
                            href="mailto:labibabdullahhasan@gmail.com"
                            className="flex items-center gap-2 px-6 py-2 bg-white text-black text-sm font-bold rounded-xl hover:scale-105 transition-transform"
                        >
                            Hire Me <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-3 text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Mesh */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full p-6 md:hidden"
                    >
                        <div className="bg-black/95 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-2xl font-bold text-neutral-500 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-white/10 w-full my-6" />
                            <a
                                href="mailto:labibabdullahhasan@gmail.com"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-2xl"
                            >
                                Hire Me <ArrowUpRight />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
