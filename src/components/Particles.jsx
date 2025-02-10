import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBG = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 100 },
                        move: { enable: true, speed: 2 },
                        shape: { type: "circle" },
                        size: { value: 3 },
                    },
                }}
            />
        </div>
    );
}

export default ParticlesBG;