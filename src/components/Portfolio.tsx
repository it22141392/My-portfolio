import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "YieldSync Mobile App",
      description: "A comprehensive fertilizer tracking system built with MERN stack, helping farmers optimize crop yields through intelligent monitoring and analytics.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js"],
      category: "Mobile App",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "FOOD Web Application",
      description: "Secure web application featuring Spring Boot backend with React.js frontend, implementing two-factor authentication for enhanced security.",
      technologies: ["Spring Boot", "React.js", "2FA", "JWT"],
      category: "Web Application",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Ivory Dental Clinic System",
      description: "Complete lab management system for dental clinics, streamlining patient records, appointments, and treatment tracking with modern UI/UX.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Management System",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Android Note App",
      description: "Clean and intuitive note-taking application for Android devices with offline sync, categorization, and search functionality.",
      technologies: ["Android Studio", "Java", "SQLite", "Material Design"],
      category: "Mobile App",
      color: "from-orange-500 to-red-500"
    },
    
    {
      title: "Catering App UI/UX",
      description: "Modern and user-friendly interface design for catering service app, focusing on seamless ordering experience and visual appeal.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      category: "UI/UX Design",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creating meaningful digital experiences 
            through innovative design and robust development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-card/50 border-border hover:shadow-glow hover:scale-105 transition-all duration-500 overflow-hidden">
              <CardHeader className="relative pb-4">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="flex justify-between items-start mt-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <a href="https://github.com/it22141392" target="_blank" rel="noopener noreferrer">

          <Button variant="gradient" size="lg" className="px-8">
            View GitHub Profile
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;