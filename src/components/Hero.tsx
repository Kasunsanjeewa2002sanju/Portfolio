import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import CountUp from 'react-countup';

import { Button } from '@/components/ui/button';
import kasunProfile from '@/assets/kasun-profile-new.jpg';
const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
     

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg font-medium">HELLO</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                I'M A{" "}
                <span className="text-gradient block">
                  WEB &
                </span>{" "}
                MOBILE APP DEVELOPER
              </h1>
            </div>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Third-year Software Engineering student with hands-on experience in full-stack web and mobile application 
development. Proficient in React.js, Node.js, ASP.NET MVC, Kotlin, React Native and Firebase, with strong 
knowledge of OOP, RESTful APIs, database design, and Agile methodologies. Passionate about building scalable, 
user-focused digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUp start={0} end={3} duration={4.5} />+
                </div>
                <div className="text-muted-foreground uppercase text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUp start={0} end={5} duration={4.5} />+
                </div>
                <div className="text-muted-foreground uppercase text-sm">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUp start={0} end={5} duration={4.5} />+
                </div>
                <div className="text-muted-foreground uppercase text-sm">Happy Clients</div>
              </div>
            </div>


            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToAbout}
              className="flex items-center px-6 py-3 font-semibold rounded-md shadow-lg transition-colors duration-300 hover:bg-orange-600 bg-orange-500"
            >
              Get Started
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-md border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300 px-6 py-3 font-semibold"
            >
              <a href="#portfolio">View Portfolio</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="flex items-center rounded-md border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-300 px-6 py-3 font-semibold"
            >
              <a href="../assets/Kasun Sanjeewa CV.pdf" download className="flex items-center">
                Download CV
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>





            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Kasunsanjeewa2002sanju" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/kasun-sanjeewa-0b4152277/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="relative w-80 md:w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl bg-gradient-to-br from-primary/10 to-transparent">
                <img src={kasunProfile} alt="Kasun Sanjeewa Senavirathna" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full px-6 py-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;