import logoPhoto from "@/assets/logo.png";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20 fhd:h-24 2k:h-28">

          {/* --- LOGO + NOMBRE --- */}
          <div className="flex items-center gap-3 lg:gap-4 fhd:gap-6 2k:gap-8">
            {/* Logo clickeable - scroll arriba */}
            <div className="relative group cursor-pointer" onClick={scrollToTop}>
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-beige-300/40 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <img
                src={logoPhoto}
                alt="Nahuel González"
                className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 fhd:w-14 fhd:h-14 2k:w-16 2k:h-16 rounded-full object-cover border-2 border-primary transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[360deg]"
              />
            </div>

            {/* Nombre clickeable - scroll a contacto */}
            <div onClick={scrollToContact} className="cursor-pointer">
              <h1 className="text-base lg:text-lg fhd:text-xl 2k:text-2xl font-bold text-foreground relative inline-block transition-all duration-500 hover:text-primary hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(210,180,140,0.6)]">
                Nahuel González
              </h1>

              <p className="text-xs lg:text-sm fhd:text-base 2k:text-lg text-muted-foreground">
                Desarrollador Fullstack · Analista Funcional · Especialista en UX y Automatización
              </p>
            </div>
          </div>

          {/* --- NAV --- */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 fhd:gap-8 2k:gap-10">
            {[
              { name: "Sobre mí", href: "#about" },
              { name: "Proyectos", href: "#projects" },
              { name: "Certificados", href: "#certificates" },
              { name: "Contacto", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm lg:text-base fhd:text-lg 2k:text-xl text-foreground hover:text-primary transition-colors"
              >
                {item.name}

                {/* Subrayado doble escalonado */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-1/2 transition-all duration-300 origin-left"></span>
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-primary/60 group-hover:w-1/2 transition-all duration-500 origin-left delay-150"></span>
                <span className="absolute right-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-1/2 transition-all duration-300 origin-right"></span>
                <span className="absolute right-0 -bottom-2 h-[1px] w-0 bg-primary/60 group-hover:w-1/2 transition-all duration-500 origin-right delay-150"></span>
              </a>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;






