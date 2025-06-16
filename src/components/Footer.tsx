import { Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    if (!isIndexPage) {
      // If not on index page, navigate to index page with the hash
      // Remove the '#' from sectionId when storing in sessionStorage
      const cleanSectionId = sectionId.replace("#", "");
      sessionStorage.setItem("scrollTarget", cleanSectionId);
      navigate("/");
      return;
    }

    // If already on index page, just scroll to the section
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-blue-950 to-blue-950 pt-16 pb-8 px-4 relative z-10"
    >
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="footer-pattern"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 10 L50 10 L50 50 L90 50 L90 90 L130 90 L130 130 L170 130 L170 170"
                stroke="#0047AB"
                strokeOpacity="0.15"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M190 10 L150 10 L150 50 L110 50 L110 90 L70 90 L70 130 L30 130 L30 170"
                stroke="#0047AB"
                strokeOpacity="0.15"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="50" cy="10" r="3" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="90" cy="50" r="3" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="130" cy="90" r="3" fill="#0047AB" fillOpacity="0.2" />
              <circle
                cx="170"
                cy="130"
                r="3"
                fill="#0047AB"
                fillOpacity="0.2"
              />
              <circle cx="150" cy="10" r="3" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="110" cy="50" r="3" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="70" cy="90" r="3" fill="#0047AB" fillOpacity="0.2" />
              <circle cx="30" cy="130" r="3" fill="#0047AB" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-blue-400/20">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold font-orbitron text-white">
                <span className="text-icd-white relative">
                  ICD
                  <span className="absolute -inset-1 bg-blue-400/20 blur-sm rounded-lg -z-10"></span>
                </span>
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Innovation, Creativity, Development.
              <br />
              Engineering the future through technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/i-c-d-/"
                className="text-white/70 hover:text-blue-300 transition-colors icon-spin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/icdcentrebeirut/"
                className="text-white/70 hover:text-blue-300 transition-colors icon-spin"
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
                  href={isIndexPage ? "#hero" : "/#hero"}
                  className="text-white/70 hover:text-icd-blue transition-colors"
                  onClick={(e) => handleNavigation(e, "#hero")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={isIndexPage ? "#who-we-are" : "/#who-we-are"}
                  className="text-white/70 hover:text-icd-blue transition-colors"
                  onClick={(e) => handleNavigation(e, "#who-we-are")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={isIndexPage ? "#services" : "/#services"}
                  className="text-white/70 hover:text-icd-blue transition-colors"
                  onClick={(e) => handleNavigation(e, "#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={isIndexPage ? "#partners" : "/#partners"}
                  className="text-white/70 hover:text-icd-blue transition-colors"
                  onClick={(e) => handleNavigation(e, "#partners")}
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href={isIndexPage ? "#contact" : "/#contact"}
                  className="text-white/70 hover:text-icd-blue transition-colors"
                  onClick={(e) => handleNavigation(e, "#contact")}
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
                <a
                  href="mailto:info@icd-me.com"
                  className="icon-spin inline-flex text-white/70 hover:text-icd-blue"
                >
                  <Mail size={16} />
                </a>
                <span>info@icd-me.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="mailto:icd-careers@gmail.com"
                  className="icon-spin inline-flex text-white/70 hover:text-icd-blue"
                >
                  <Mail size={16} />
                </a>
                <span>icd-careers@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="tel:+96171777795"
                  className="icon-spin inline-flex text-white/70 hover:text-icd-blue"
                >
                  <Phone size={16} />
                </a>
                <span>+961 71 777795</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="tel:+96171896000"
                  className="icon-spin inline-flex text-white/70 hover:text-icd-blue"
                >
                  <Phone size={16} />
                </a>
                <span>+961 71 896000</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://maps.app.goo.gl/eitSEvWK5ACmUkuS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-spin inline-flex text-white/70 hover:text-icd-blue"
                >
                  <MapPin size={16} />
                </a>
                <span>Beirut,Downtown,Allenby St,Py136 bldg,1st floor</span>
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
