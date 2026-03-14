import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export const Contact = () => {
  const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/LabibAbdullah1", color: "hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/labib-abdullah", color: "hover:text-[#0077B5]" },
    { name: "Instagram", icon: Instagram, link: "https://instagram.com/LABIB_205", color: "hover:text-pink-500" },
  ];

  const email = "labibabdullahhasan@gmail.com";

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-8">
            Get in touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's craft something <br/><span className="shimmer-text">extraordinary</span> together.</h2>
          
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out.
          </p>

          <div className="flex justify-center gap-6 mb-16">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-neutral-500 transition-all p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 shadow-xl ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <a 
            href={`mailto:${email}`}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-3">
               Connect via Email <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
