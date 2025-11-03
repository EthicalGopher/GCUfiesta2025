import { Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import gcu_logo from "@/assets/GCU-Logo-White.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cinzel'] text-white">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-400">
              {/* Removed Mail */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>70990 50019</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>College Campus, Main Building</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cinzel'] text-white">Quick Links</h3>
            <div className="space-y-2">
             
              <a href="#gallery" className="block text-gray-400 hover:text-green-400 transition-colors">
                Photo Gallery
              </a>
              <a href="#schedule" className="block text-gray-400 hover:text-red-400 transition-colors">
                Event Schedule
              </a>
              <a href="https://maps.app.goo.gl/gj7j57ZEZB3m4srz6" target="_blank" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Location
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cinzel'] text-white">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and announcements
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/gcuniversityassam"
                className="p-3 bg-gray-700 text-white rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/gcuniversityassam"
                className="p-3 bg-gray-700 text-white rounded-full hover:bg-green-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/GCUniversityA"
                className="p-3 bg-gray-700 text-white rounded-full hover:bg-red-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

   
      </div>
      <div className="grid place-items-center">
        <img className="w-80" src={gcu_logo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;