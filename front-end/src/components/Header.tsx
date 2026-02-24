import logoPhoto from "@/assets/Logo.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const changeLanguage = (lang: "es" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const navItems = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.certificates"), href: "#certificates" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* LOGO + NOMBRE */}
          <div className="flex items-center gap-4">

            {/* LOGO CON GIRO */}
            <div
              className="relative group cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-beige-300/40 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              <img
                src={logoPhoto}
                alt="Nahuel González"
                className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-primary transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[360deg]"
              />
            </div>

            {/* NOMBRE QUE VA A CONTACTO */}
            <div onClick={scrollToContact} className="cursor-pointer">
              <h1 className="text-base lg:text-lg font-bold text-foreground relative inline-block transition-all duration-500 hover:text-primary hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(210,180,140,0.6)]">
                Nahuel González
              </h1>

              <p className="text-xs lg:text-sm text-muted-foreground">
                {t("header.subtitle")}
              </p>
            </div>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm lg:text-base text-foreground hover:text-primary transition-colors"
              >
                {item.name}

                {/* 4 líneas originales */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-1/2 transition-all duration-300 origin-left"></span>
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-primary/60 group-hover:w-1/2 transition-all duration-500 origin-left delay-150"></span>
                <span className="absolute right-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-1/2 transition-all duration-300 origin-right"></span>
                <span className="absolute right-0 -bottom-2 h-[1px] w-0 bg-primary/60 group-hover:w-1/2 transition-all duration-500 origin-right delay-150"></span>
              </a>
            ))}

            {/* SELECTOR IDIOMA */}
            <div className="flex items-center gap-2 ml-6 text-sm">
              <span className="opacity-70">🌐</span>

              <button
                onClick={() => changeLanguage("es")}
                className={`transition-all duration-300 hover:text-primary ${
                  i18n.language === "es"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground opacity-70"
                }`}
              >
                ES
              </button>

              <span className="opacity-40">|</span>

              <button
                onClick={() => changeLanguage("en")}
                className={`transition-all duration-300 hover:text-primary ${
                  i18n.language === "en"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground opacity-70"
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => changeLanguage("es")}
                  className={i18n.language === "es"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"}
                >
                  ES
                </button>

                <button
                  onClick={() => changeLanguage("en")}
                  className={i18n.language === "en"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"}
                >
                  EN
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;




