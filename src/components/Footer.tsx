import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#001F3F] pt-16 pb-8 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-blue-300/10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
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
                className="text-white/60 hover:text-icd-blue transition-colors icon-spin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/icdcentrebeirut/"
                className="text-white/60 hover:text-icd-blue transition-colors icon-spin"
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
            <h3 className="text-lg font-orbitron mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center space-x-2">
                <a href="mailto:info@icd-me.com" className="icon-spin inline-flex text-white/70 hover:text-icd-blue">
                  <Mail size={16} />
                </a>
                <span>info@icd-me.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="mailto:icd-careers@gmail.com" className="icon-spin inline-flex text-white/70 hover:text-icd-blue">
                  <Mail size={16} />
                </a>
                <span>icd-careers@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="tel:+96171777795" className="icon-spin inline-flex text-white/70 hover:text-icd-blue">
                  <Phone size={16} />
                </a>
                <span>+961 71 777795</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="tel:+96171896000" className="icon-spin inline-flex text-white/70 hover:text-icd-blue">
                  <Phone size={16} />
                </a>
                <span>+961 71 896000</span>
              </li>
              <li className="flex items-center space-x-2">
                <a href="https://maps.app.goo.gl/eitSEvWK5ACmUkuS8" target="_blank" rel="noopener noreferrer" className="icon-spin inline-flex text-white/70 hover:text-icd-blue">
                  <MapPin size={16} />
                </a>
                <span>
                  Beirut,Downtown,Allenby St,Py136 bldg,1st floor
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-blue-200/50 text-sm">
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
