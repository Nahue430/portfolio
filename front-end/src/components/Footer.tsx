import React from "react";

type Props = {
  videoSrc?: string;
};

const Footer: React.FC<Props> = ({ videoSrc = "/videos/videoFooter.mp4" }) => {
  return (
    <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-sm border-t border-border z-40 overflow-hidden">
      <div className="h-16 lg:h-20 fhd:h-24 2k:h-28 relative flex items-center">
        
        {/* === VIDEO BACKGROUND CON FILTRO NEUTRO === */}
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale contrast-90 brightness-95"
        />

        {/* === TEXTO LATERAL IZQUIERDO === */}
        <div className="relative z-10 pl-6 lg:pl-10 fhd:pl-14 text-xs lg:text-sm fhd:text-base text-muted-foreground opacity-80">
          Desarrollo soluciones que transforman ideas en sistemas claros, útiles y escalables.
        </div>

      </div>
    </footer>
  );
};

export default Footer;


