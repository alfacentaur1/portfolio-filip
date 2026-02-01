import ShinyText from './ShinyText'; 
import TiltedCard from './TiltedCard';
import calc from "./imgs/calc.png"; 
import php from "./imgs/php.png"; 
import rps from "./imgs/rps.png"; 
import sms from "./imgs/real.png";
import cookie from "./imgs/cookie.png";
import todo from "./imgs/to-do.png";
import weather from "./imgs/weather.png";
import stopwatch from "./imgs/stopwatch.png";
import pswd from "./imgs/pswd.png";
import asterix from "./imgs/asterix.png";
import springImg from "./imgs/spring.png"; 
import smarthome from "./imgs/smarthome.png";
import dijkstra from "./imgs/dijkstra.png";

const projectsData = [
    {
        title: "API Board Game Rental",
        link: "https://github.com/alfacentaur1/api-board-game-rental",
        image: springImg,
        alt: "spring"
    },
    {
        title: "Smart Home Simulation",
        link: "https://github.com/alfacentaur1/smarthome-simulation",
        image: smarthome,
        alt: "smarthome"
    },
    {
        title: "Dijkstra, Bellman-Ford Comparison",
        link: "https://github.com/alfacentaur1/dijkstra---BF-comparison",
        image: dijkstra,
        alt: "dijkstra"
    },
    {
        title: "JS Calculator",
        link: "https://alfacentaur1.github.io/calculator/",
        image: calc,
        alt: "calc"
    },
    {
        title: "QR code generator",
        link: "https://zwa.toad.cz/~kopecfi3/phpqr/QR-code-generator/",
        image: php,
        alt: "qr"
    },
    {
        title: "JS rock paper scissors",
        link: "https://alfacentaur1.github.io/rock-paper-scissors-js/",
        image: rps,
        alt: "rps"
    },
    {
        title: "PHP reality estate website",
        link: "https://zwa.toad.cz/~kopecfi3/zwa-php/",
        image: sms,
        alt: "sms"
    },
    {
        title: "JS stopwatch",
        link: "https://stopwatch-kappa-nine.vercel.app/",
        image: stopwatch,
        alt: "stopwatch"
    },
    {
        title: "JS weather app",
        link: "https://weather-app-flame-beta-35.vercel.app/",
        image: weather,
        alt: "weather"
    },
    {
        title: "Java Asterix Game",
        link: "https://github.com/alfacentaur1/java-asterix-game",
        image: asterix,
        alt: "asterix"
    },
    {
        title: "JS to do app",
        link: "https://js-to-do-app-seven.vercel.app/",
        image: todo,
        alt: "to-do"
    },
    {
        title: "JS cookie clicker",
        link: "https://clickme-app.vercel.app/",
        image: cookie,
        alt: "cookie"
    },
    {
        title: "JS password generator",
        link: "https://password-generator-theta-sand.vercel.app/",
        image: pswd,
        alt: "pswd"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="relative z-50 py-20 flex items-center justify-center flex-col px-4">
            <ShinyText
                text="Projects"
                disabled={false}
                speed={3}
                className="text-5xl text-center mb-6 font-bold" 
            />

            <ShinyText
                text="All source codes available on my GitHub."
                disabled={false}
                speed={3}
                className="text-xl mb-16 text-center max-w-2xl" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl mx-auto place-items-center">
                {projectsData.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full flex justify-center transition-transform hover:scale-105"
                    >
                        <TiltedCard
                            imageSrc={project.image}
                            altText={project.alt}
                            captionText={project.title}
                            containerHeight="300px"
                            containerWidth="100%"
                            imageHeight="250px"
                            imageWidth="100%"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <p className="bg-black/70 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm">
                                    {project.title}
                                </p>
                            }
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};