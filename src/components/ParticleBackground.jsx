import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // useEffect ini dijalankan sekali saat komponen dipasang
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // Memuat paket "slim" yang ringan
            await loadSlim(engine);
        }).then(() => {
            // Setelah engine siap, ubah state menjadi true
            setInit(true);
        });
    }, []);

    const options = {
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        background: {
            color: "#1a4fbbff", // Kita set background dasar abu-abu muda
        },
        particles: {
            color: { value: "#94a3b8" }, // Ini warna Slate-400 (Abu-abu kebiruan), cocok untuk tema terang

            shape: { type: "circle" },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: { min: 1, max: 6 }, 
                random: true,
            },
            move: {
                enable: true,
                speed: 5,
                direction: "bottom",
                random: false,
                straight: false,
                outModes: {
                    default: "out",
                },
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
        },
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;