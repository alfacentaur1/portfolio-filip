import ShinyText from './ShinyText'; 
import SpotlightCard from "./SpotlightCard";
import image from "./imgs/ibm1.svg";
import fcc from "./imgs/fcc.png";
import StarBorder from './StarBorder'


export const Certifications = () => {

  return (
    
    <section id="certifications" className="py-16 flex flex-col justify-center items-center pt-55 pb-25 flex-wrap z-50 mb-35">
    <ShinyText text="Certifications" disabled={false} speed={3} className='shiny-text text-5xl ' />
      <div className="flex justify-evenly flex-wrap w-[100%]">
      <SpotlightCard
          className="mb-10 z-50 custom-spotlight-card spotlight-card w-[70%] sm:w-[50%] md:w-[33%] lg:w-[25%] flex flex-col items-center justify-center transform translate-y-10 transition-all duration-500 hover:shadow-x3"
          spotlightColor="rgba(225, 212, 214, 0.25)"
        >
          <img
            src={image}
            alt="ibm_logo"
            style={{
              borderRadius: "15px",
              width: "80%",
              maxWidth: "200px",
            }}
          />
          <h2 className="mt-4 mb-4 text-center">Web development</h2>
          <ul>
            <li className="underline">Skills obtained</li>
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>Web deploying</li>
            <li>Web testing</li>
          </ul>
        </SpotlightCard>


  <SpotlightCard
          className="mb-10 z-50 custom-spotlight-card spotlight-card w-[70%] sm:w-[50%] md:w-[33%] lg:w-[25%] flex flex-col items-center justify-center transform translate-y-10 transition-all duration-500 hover:shadow-x3"
          spotlightColor="rgba(225, 212, 214, 0.25)"
        >
          <img
            src={image}
            alt="ibm_logo"
            style={{
              borderRadius: "15px",
              width: "80%",
              maxWidth: "200px",
            }}
          />
          <h2 className="mt-4 mb-4 text-center">Cybersecurity fundamentals</h2>
          <ul>
            <li className="underline">Skills obtained</li>
            <li>Safety in cyber world</li>
            <li>Common threads and attacks</li>
            <li>Cybersecurity policies</li>
            <li>Best practices</li>
          </ul>
        </SpotlightCard>
        <SpotlightCard
          className="mb-10 z-50 custom-spotlight-card spotlight-card w-[70%] sm:w-[50%] md:w-[33%] lg:w-[25%] flex flex-col items-center justify-center transform translate-y-10 transition-all duration-500 hover:shadow-x3"
          spotlightColor="rgba(225, 212, 214, 0.25)"
        >
          <img
            src={image}
            alt="ibm_logo"
            style={{
              borderRadius: "15px",
              width: "80%",
              maxWidth: "200px",
            }}
          />
          <h2 className="mt-4 mb-4 text-center">Project management</h2>
          <ul>
            <li className="underline">Skills obtained</li>
            <li>Project lifecycle</li>
            <li>Communications</li>
            <li>Team leadership</li>
            <li>Project reports</li>
          </ul>
        </SpotlightCard>

        

        <SpotlightCard
          className="z-50 custom-spotlight-card spotlight-card w-[70%] sm:w-[50%] md:w-[33%] lg:w-[25%] flex flex-col items-center justify-center transform translate-y-10 transition-all duration-500 hover:shadow-x3 mb-10"
          spotlightColor="rgba(225, 212, 214, 0.25)"
        >
          <img
            src={fcc}
            alt="fcc_logo"
            style={{
              borderRadius: "15px",
              width: "80%",
              maxWidth: "200px",
            }}
          />
          <h2 className="mt-4 mb-4 text-center">Responsive web design</h2>
          <ul>
            <li className="underline">Skills obtained</li>
            <li>HTML, CSS</li>
            <li>Responsive web layout</li>
            <li>Web pages</li>
            <li></li>
          </ul>
        </SpotlightCard>
      </div>
    </section>
  );
};
