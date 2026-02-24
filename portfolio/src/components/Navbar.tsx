import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll function (GitHub Pages safe)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-heading font-bold gradient-text"
          >
            MR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {link.name}
                </button>
              ))}

              <Button
                variant="hero"
                size="default"
                className="mt-2"
                onClick={() => {
                  scrollToSection("contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;