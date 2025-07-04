import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profileimage.jpeg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["UI/UX Designer", "Frontend Developer", "Web Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hansi Paboda
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-medium">
              <span className="transition-all duration-500 ease-in-out">
                {titles[currentTitleIndex]}
              </span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Proactive BSc (Hons) in Information Technology student at SLIIT, specializing
              in Information technology, passionate about solving challenges through innovation, with strong
              academic knowledge and hands-on industry experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6 border-primary/20 hover:border-primary"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 scale-110"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Hansi Paboda Dilisini"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-secondary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-accent rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;