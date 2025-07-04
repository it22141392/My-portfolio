import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      title: "BSc (Hons) in Information Technology",
      institution: "SLIIT",
      period: "2022 - Present",

    }
    
  ];

  const skills = [
    { category: "Design", items: ["UI/UX Design", "Figma", "User Research", "Wireframing", "Prototyping"] },
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"] },
    { category: "Backend", items: ["Spring Boot", "Node.js", "Express.js", "MongoDB", "Python"] },
    { category: "Tools", items: ["Git", "Android Studio", "C++", "C Programming"] }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate technologist who believes in the power of design and code to create 
            meaningful digital experiences. My journey combines technical expertise with creative vision 
            to build solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Education */}
<div>
  <h3 className="text-2xl font-bold mb-8 flex items-center">
    <div className="w-8 h-8 bg-gradient-primary rounded-lg mr-3"></div>
    Education
  </h3>

  {/* Journey Description */}
  <p className="text-muted-foreground mb-6">
    My academic journey began at SLIIT, where I enrolled in the BSc (Hons) in Information Technology program in 2022. 
    With a passion for problem-solving and user-centric design, I have immersed myself in both technical and creative 
    disciplines. This journey has helped shape my skills in full-stack development and user experience, allowing me to build 
    real-world projects that bridge functionality and aesthetics.
  </p>

  <div className="space-y-6">
    {education.map((edu, index) => (
      <Card key={index} className="bg-card/50 border-border hover:shadow-card transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-foreground">{edu.title}</h4>
            <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
              {edu.period}
            </span>
          </div>
          <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
          <p className="text-sm text-muted-foreground">{edu.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>


          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-secondary rounded-lg mr-3"></div>
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="bg-card/50 border-border hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        
      </div>
    </section>
  );
};

export default About;