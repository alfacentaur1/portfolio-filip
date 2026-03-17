import ShinyText from './ShinyText';  
import "../index.css"; 

export const Navbar = () => {
    return (
        <div>
        <nav className="fixed top-0 w-full z-60 bg-[rgba(10,10,10,0.8)] border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#about" className="font-mono">
                        <ShinyText text="About" disabled={false} speed={3} className='shiny-text' />
                    </a>
                    <a href="#projects"><ShinyText text="Projects" disabled={false} speed={3} className='shiny-text' /></a>
                    <a href="#certifications"><ShinyText text="Certifications" disabled={false} speed={3} className='shiny-text' /></a>
                    <a href="#contact"><ShinyText text="Contact" disabled={false} speed={3} className='shiny-text' /></a>
                </div>
            </div>
        </nav>
        </div>
    );
};


