import logoPhoto from "@/assets/logo.png";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();

  // 🔹 Persistencia automática del idioma
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = (lang: "es" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20 fhd:h-24 2k:h-28">

          {/* LOGO + NOMBRE */}
          <div className="flex items-center gap-3 lg:gap-4 fhd:gap-6 2k:gap-8">
            <div
              className="relative group cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-beige-300/40 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              <img
                src={logoPhoto}
                alt="Nahuel González"
                className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 fhd:w-14 fhd:h-14 2k:w-16 2k:h-16 rounded-full object-cover border-2 border-primary transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[360deg]"
              />
            </div>

            <div onClick={scrollToContact} className="cursor-pointer">
              <h1 className="text-base lg:text-lg fhd:text-xl 2k:text-2xl font-bold text-foreground relative inline-block transition-all duration-500 hover:text-primary hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(210,180,140,0.6)]">
                Nahuel González
              </h1>

              <p className="text-xs lg:text-sm fhd:text-base 2k:text-lg text-muted-foreground">
                {t("header.subtitle")}
              </p>
            </div>
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 fhd:gap-8 2k:gap-10">

            {[
              { name: t("navbar.about"), href: "#about" },
              { name: t("navbar.projects"), href: "#projects" },
              { name: t("navbar.certificates"), href: "#certificates" },
              { name: t("navbar.contact"), href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm lg:text-base fhd:text-lg 2k:text-xl text-foreground hover:text-primary transition-colors"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-1/2 transition-all duration-300 origin-left"></span>
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-primary/60 group-hover:w-1/2 transition-all duration-500 origin-left delay-150"></span>
                <span className="absolute right-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-1/2 transition-all duration-300 origin-right"></span>
                <span className="absolute right-0 -bottom-2 h-[1px] w-0 bg-primary/60 group-hover:w-1/2 transition-all duration-500 origin-right delay-150"></span>
              </a>
            ))}

            {/* 🌐 SELECTOR DE IDIOMA */}
            <div className="flex items-center gap-2 ml-6 text-sm lg:text-base fhd:text-lg 2k:text-xl">

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
        </div>
      </div>
    </header>
  );
};

export default Header;





