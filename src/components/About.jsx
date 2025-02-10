import BlurText from "./BlurText";
import pfp from "./imgs/pfp.jpg";
import ParticlesBG from "./Particles";
export const About = () => {
    return (
        
        <section id="about" className="relative overflow-hidden min-h-screen flex justify-center items-center pt-25 z-20">
            {/* <div className="custom-scroll"></div> */}
            <ParticlesBG /> 
            <div className="flex justify-center flex-col items-center z-50">
                <img src={pfp} alt="pfp pic" width="20%" className="mb-8 z-50" />
                <BlurText
                    text="Hello! Welcome to my personal page!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-5xl mb-8 rounded-md shadow-sm flex items-center justify-center flex-wrap z-50"
                />
                <div className="flex flex-col items-center justify-center flex-wrap z-50">
                    <h1 className="text-center break-words max-w-3xl flex flex-wrap items-center z-50">
                        My name is Filip Kopecký and I am a passionate developer from the Czech Republic, currently pursuing my software engineering degree at CTU FEE.
                    </h1>
                    <h1 className="text-center break-words max-w-3xl flex flex-wrap items-center z-50">
                        I mostly program in Python, PHP and JS. Currently learning Java.
                    </h1>
                </div>
            </div>
        </section>
    );
};