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
            zIndex: 0,
        },
        background: {
            color: "transparent",
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.05,
                width: 1,
            },
            move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
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
                value: 40,
            },
            opacity: {
                value: 0.1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
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