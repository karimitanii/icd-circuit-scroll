import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Get hero section height to determine navbar visibility
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        // Always show navbar after hero section, only hide when scrolling up within hero
        if (scrollPosition < heroHeight) {
          // In hero section - show only when near top or when hovering
          setIsVisible(scrollPosition < 100 || isHovering);
        } else {
          // Past hero section - always show
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovering]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#who-we-are" },
    { name: "Leadership", href: "#ceo" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Careers", href: "#careers" },
    { name: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-6",
        isScrolled
          ? "bg-gradient-to-r from-blue-950/90 to-blue-800/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,30,80,0.4)] border-b border-blue-700/30"
          : "bg-transparent",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-blue-700/10 blur-xl rounded-full opacity-50 pointer-events-none"></div>

        <a
          href="#hero"
          className="flex items-center space-x-2 relative"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
        >
          <span className="text-3xl font-bold font-orbitron text-white">
            <span className="text-icd-white relative">
              ICD
              <span className="absolute -inset-1 bg-blue-400/20 blur-sm rounded-lg -z-10"></span>
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-blue-300 transition-all duration-300 text-sm font-futuristic relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#001F3F]/95 backdrop-blur-md absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-icd-blue py-2 transition-colors text-sm font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
