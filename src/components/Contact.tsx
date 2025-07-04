import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "dilishinihanshi@gmail.com",
      link: "mailto:dilishinihanshi@gmail.com"
    },
    {
      icon: "📱", 
      label: "Phone",
      value: "+94 743 668 564",
      link: "tel:+94743668564"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      link: "#" // Update with actual LinkedIn URL
    },
    {
      icon: "📍",
      label: "Location", 
      value: "Pallama, Pannala, Sri Lanka",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects 
            and opportunities. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg mr-3"></div>
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 border-border hover:shadow-card hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={info.link} 
                      className="block text-center group"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{info.label}</h4>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              
              <p className="text-sm text-muted-foreground text-center">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center justify-center">
            <Card className="bg-gradient-primary/5 border-primary/20 w-full">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Let's discuss how I can help bring your vision to life. 
                  From initial concept to final implementation, I'm here to guide you through every step.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Available for projects
                    </span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      Quick response time
                    </span>
                  </div>
                  
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:dilishinihanshi@gmail.com'}
                  >
                    Start a Conversation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;