import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-icd-dark pt-16 pb-8 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/7f00208c-2b91-4a73-9151-d078f7307838.png"
                alt="ICD Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold font-orbitron text-white">
                <span className="text-icd-blue">ICD</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Innovation, Creativity, Development.
              <br />
              Engineering the future through technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-icd-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/icdcentrebeirut/"
                className="text-white/60 hover:text-icd-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-orbitron mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-white/70 hover:text-icd-blue transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#who-we-are"
                  className="text-white/70 hover:text-icd-blue transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-icd-blue transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-white/70 hover:text-icd-blue transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-icd-blue transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@icd-me.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>icd-careers@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>PUT NUMBER !!!</span>{" "}
                {/* Replace with actual phone number */}
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>
                  Beirut,Downtown,Allenby St,Py136 bldg,1st floor
                </span>{" "}
                {/* Replace with actual address */}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Innovation Creativity Development
            (ICD). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
