const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
              Hansi Paboda Dilisini
            </h3>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#portfolio" className="block text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Let's Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>dilishinihanshi@gmail.com</p>
              <p>+94 743 668 564</p>
              <p>Pallama, Pannala, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hansi Paboda Dilisini. All rights reserved. Built with passion and modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;