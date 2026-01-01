import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const certificates = [
  {
    title: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional (UTN)",
    year: "2023",
    description: "Formación integral en programación, análisis de sistemas y desarrollo de software."
  },
  {
    title: "Auditor Interno ISO 9001",
    institution: "Organismo Certificador IRAM",
    year: "2022",
    description: "Certificación en auditoría de sistemas de gestión de calidad según norma ISO 9001.",
    pdf: "/certificates/IRAM-ISO-9001.pdf"
  },
  {
    title: "Desarrollo Web Frontend",
    institution: "Plataforma Online",
    year: "2023",
    description: "Especialización en React, TypeScript, y tecnologías frontend modernas."
  },
  {
    title: "JavaScript Avanzado",
    institution: "Plataforma Online",
    year: "2022",
    description: "Curso avanzado de JavaScript ES6+, async/await, y programación funcional."
  },
  {
    title: "Git y GitHub",
    institution: "Plataforma Online",
    year: "2022",
    description: "Control de versiones, trabajo colaborativo y gestión de repositorios."
  },
  {
    title: "Responsive Web Design",
    institution: "Plataforma Online",
    year: "2021",
    description: "Diseño web responsive, mobile-first y mejores prácticas de UI/UX."
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
          Certificados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 fhd:gap-10 2k:gap-12">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl fhd:text-2xl 2k:text-3xl text-foreground">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                  {cert.institution} • {cert.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                  {cert.description}
                </p>
              </CardContent>
              <CardFooter>
                {cert.pdf ? (
                  <Button asChild variant="outline" className="w-full text-sm lg:text-base fhd:text-lg 2k:text-xl">
                    <a href={cert.pdf} download target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 lg:w-5 lg:h-5 fhd:w-6 fhd:h-6 2k:w-7 2k:h-7 mr-2" />
                      Descargar PDF
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full text-sm lg:text-base fhd:text-lg 2k:text-xl" disabled>
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 fhd:w-6 fhd:h-6 2k:w-7 2k:h-7 mr-2" />
                    No disponible
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
