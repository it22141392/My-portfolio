import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping", 
        "Interactive Design Systems",
        "Usability Testing"
      ],
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Frontend Development",
      description: "Building responsive, performant web applications using modern technologies and best practices.",
      features: [
        "React.js Development",
        "Responsive Web Design",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
  title: "Business Analytics",
  description: "Leveraging data to drive strategic decisions and improve business outcomes.",
  features: [
    "Data Analysis & Visualization",
    "Dashboard Creation",
    "KPI Monitoring",
    "Predictive Modeling"
  ],
  icon: "📊",
  gradient: "from-green-500 to-lime-400"
}

    
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive digital solutions that combine creative design thinking 
            with technical expertise to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group bg-card/50 border-border hover:shadow-glow hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 text-2xl">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What I Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              My <span className="bg-gradient-secondary bg-clip-text text-transparent">Process</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I follow a structured approach to ensure every project delivers exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, goals, and requirements" },
              { step: "02", title: "Planning", description: "Creating roadmaps, wireframes, and technical specifications" },
              { step: "03", title: "Development", description: "Building with attention to detail and best practices" },
              { step: "04", title: "Delivery", description: "Testing, refinement, and successful project launch" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;