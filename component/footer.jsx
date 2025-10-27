import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cinzel'] bg-gradient-cultural bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>culturalfest@college.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>College Campus, Main Building</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cinzel']">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About the Festival
              </a>
              <a href="#gallery" className="block text-muted-foreground hover:text-secondary transition-colors">
                Photo Gallery
              </a>
              <a href="#schedule" className="block text-muted-foreground hover:text-accent transition-colors">
                Event Schedule
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Register Now
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cinzel']">Follow Us</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest news and announcements
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary/10 text-secondary rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-accent/20 text-accent rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Cultural Fest. Celebrating French, Russian & Japanese traditions.</p>
          <p className="text-sm mt-2">Made with ❤️ by the Cultural Committee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

