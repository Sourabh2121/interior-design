'use client';
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 2 },
                        repulse: { distance: 150, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: "#d4af37" },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 50,
                    },
                    opacity: { value: 0.4 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
            className="position-absolute top-0 start-0 w-100 h-100 z-0"
        />
    );
}
