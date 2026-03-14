import React from 'react';
import { Github, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 mt-48 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-12 border-b border-white/10">
                    <div className="space-y-6 max-w-sm text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-black font-black text-xl">L</span>
                            </div>
                            <span className="text-white font-bold tracking-tighter text-2xl">LABIB</span>
                        </div>
                        <p className="text-neutral-500 leading-relaxed text-sm">
                            Engineering digital excellence through meticulous code and high-end design. 
                            Let's build something extraordinary together.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/LabibAbdullah1" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/labib-abdullah" },
                                { icon: Instagram, href: "https://instagram.com/LABIB_205" },
                                { icon: Mail, href: "mailto:labibabdullahhasan@gmail.com" }
                            ].map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                        <button 
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors group"
                        >
                            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 text-neutral-600 text-[10px] uppercase font-bold tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} Labib Abdullah. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;