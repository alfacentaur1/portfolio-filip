import CircularGallery from './CircularGallery';
import ShinyText from './ShinyText'; 
import Masonry from './Masonry';
import calc from "./imgs/calc.png"; 
import php from "./imgs/php.png"; 
import rps from "./imgs/rps.png"; 
import sms from "./imgs/real.png";
import TiltedCard from './TiltedCard';
import cookie from "./imgs/cookie.png";
import todo from "./imgs/to-do.png";
import weather from "./imgs/weather.png";
import stopwatch from "./imgs/stopwatch.png";
import pswd from "./imgs/pswd.png";

const data = [
    { id: "https://alfacentaur1.github.io/calculator/", image: calc, height: 500 },
    { id: 2, image: php, height: 600 },
    { id: 3, image: rps, height: 500 },
    { id: 4, image: sms, height: 700}
    ];
    export const Projects = () => {
        return (
            <section id="projects" className="z-50 pb-5 pt-25 flex items-center justify-center flex-col z-50 ">
                <ShinyText
    text="Projects"
    disabled={false}
    speed={3}
    className="z-50 shiny-text text-5xl text-center" 
/>

<ShinyText
    text="All source codes available on my GitHub."
    disabled={false}
    speed={3}
    className="w-[40%] z-50 shiny-text text-xl pt-5 mb-40 text-center" 
/>
    
                {/* Main container for projects */}
                <div className="z-50 flex flex-wrap justify-center items-center gap-6 w-full">
                    {/* Individual cards */}
                    <a href="https://alfacentaur1.github.io/calculator/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={calc}
                            altText="calc"
                            captionText="JS Calculator"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS Calculator</p>}
                            className="flex item-center justify-center"
                        />
                    </a>
                    <a href="https://zwa.toad.cz/~kopecfi3/phpqr/QR-code-generator/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={php}
                            altText="qr"
                            captionText="QR code generator"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">PHP QR code generator</p>}
                        />
                    </a>
                    <a href="https://alfacentaur1.github.io/rock-paper-scissors-js/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={rps}
                            altText="rps"
                            captionText="JS rock paper scissors"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS rock paper scissors</p>}
                        />
                    </a>
                    <a href="https://zwa.toad.cz/~kopecfi3/zwa-php/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={sms}
                            altText="sms"
                            captionText="PHP reality estate website"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">PHP reality estate website</p>}
                        />
                    </a>
                    <a href="https://stopwatch-kappa-nine.vercel.app/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={stopwatch}
                            altText="stopwatch"
                            captionText="JS stopwatch"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS stopwatch</p>}
                        />
                    </a>
                    <a href="https://weather-app-flame-beta-35.vercel.app/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={weather}
                            altText="weather"
                            captionText="JS weather app"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS weather app</p>}
                        />
                    </a>
                    <a href="https://github.com/alfacentaur1/java-asterix-game" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={asterix}
                            altText="asterix"
                            captionText="Java Asterix Game"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">Java asterix game</p>}
                        />
                    </a>
                    <a href="https://js-to-do-app-seven.vercel.app/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={todo}
                            altText="to-do"
                            captionText="JS to do app"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS to do app</p>}
                        />
                    </a>
                    <a href="https://clickme-app.vercel.app/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={cookie}
                            altText="cookie"
                            captionText="JS to do app"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS cookie clicker</p>}
                        />
                    </a>
                    <a href="https://password-generator-theta-sand.vercel.app/" className="z-50 mb-20">
                        <TiltedCard
                            imageSrc={pswd}
                            altText="pswd"
                            captionText="JS password generator"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="350px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">JS password generator</p>}
                        />
                    </a>
                </div>
            </section>
        );
    };
    