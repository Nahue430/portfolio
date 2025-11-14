import profilePhoto from "@/assets/profile-photo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20 fhd:h-24 2k:h-28">
          <div className="flex items-center gap-3 lg:gap-4 fhd:gap-6 2k:gap-8">
            <img 
              src={profilePhoto} 
              alt="Nahuel González" 
              className="w-10 h-10 lg:w-12 lg:h-12 fhd:w-14 fhd:h-14 2k:w-16 2k:h-16 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h1 className="text-base lg:text-lg fhd:text-xl 2k:text-2xl font-bold text-foreground">
                Nahuel González
              </h1>
              <p className="text-xs lg:text-sm fhd:text-base 2k:text-lg text-muted-foreground">
                Analista Funcional, Programador y Desarrollador Frontend
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 fhd:gap-8 2k:gap-10">
            <a href="#about" className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-foreground hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#projects" className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-foreground hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#certificates" className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-foreground hover:text-primary transition-colors">
              Certificados
            </a>
            <a href="#contact" className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
