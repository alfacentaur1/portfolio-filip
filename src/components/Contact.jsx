import BlurText from "./BlurText";
import linkedin from "./imgs/linkedin2.png";
import github from "./imgs/github2.png";
import StarBorder from './StarBorder';
import TiltedCard from "./TiltedCard";

export const Contact = () => {

  return (
    <section id="contact" className="flex flex-col justify-center items-center h-screen py-16 pt-55 pb-25 z-50 m-0">
                <BlurText
                    text="Oh, my page is ending here, thank you for scrolling so far!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-5xl mb-12 flex flex-wrap justify-center items-center"
                />
                <BlurText
                    text="If you are interested, let's stay in touch!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-30 flex flex-wrap justify-center items-center"
                />
        <div className="z-50 flex justify-evenly items-center w-[50%] flex-wrap mb-10">
        <a href="https://www.linkedin.com/in/filipkopecky/" className="mb-17">
            <TiltedCard
            imageSrc={linkedin}
            altText="linkedin"
            captionText="Yep, that's me!"
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="150px"
            imageWidth="150px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                LinkedIn
                </p>
            }
            />
        </a >
        <a href="https://github.com/alfacentaur1" className="mb-17">
            <TiltedCard
            imageSrc={github}
            altText="github"
            captionText="Check out what im building right now!"
            containerHeight="150px"
            containerWidth="150px"
            imageHeight="150px"
            imageWidth="150px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
                <p className="tilted-card-demo-text">
                GitHub
                </p>
            }
            />
        </a>
        </div>

    </section>
  );
};
