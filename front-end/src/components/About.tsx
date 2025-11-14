import profile from "@/assets/profile-photo.jpg";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">

        {/* Título */}
        <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
          Sobre mí
        </h2>

        {/* Texto introductorio */}
        <p className="text-base lg:text-lg fhd:text-xl 2k:text-2xl text-muted-foreground leading-relaxed mb-12 animate-fade-in max-w-4xl text-justify">
          Soy un desarrollador fullstack formado en programación y con experiencia en análisis funcional, desarrollo de software y gestión de procesos. Mi recorrido comenzó en áreas administrativas y de calidad, donde incorporé una metodología de trabajo basada en ISO 9001, la mejora continua y una comprensión integral del negocio.

          Esa base me guió hacia el mundo del desarrollo, donde hoy diseño y construyo soluciones web, mobile y desktop, integrando también gestión de bases de datos, automatizaciones y herramientas de inteligencia artificial. Combino técnica y análisis para crear sistemas claros, eficientes y orientados al usuario.
        </p>


        {/* === CARD + FOTO (2 columnas dentro del mismo ancho que Projects) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Card Académica */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl">
                Formación Académica
              </CardTitle>
              <CardDescription className="text-sm lg:text-base fhd:text-lg 2k:text-xl">
                Estudios y certificaciones relevantes
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <p className="text-base font-medium">Tecnicatura Universitaria en Programación</p>
                <p className="text-muted-foreground">Universidad Tecnológica Nacional (UTN)</p>
              </div>

              <div>
                <p className="text-base font-medium">Auditor Interno ISO 9001</p>
                <p className="text-muted-foreground">Gestión de Calidad - Certificación Oficial</p>
              </div>

              <div>
                <p className="text-base font-medium">Cursos de Desarrollo Web</p>
                <p className="text-muted-foreground">Tecnologías frontend modernas</p>
              </div>
            </CardContent>
          </Card>

          {/* FOTO ALINEADA PERFECTA */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-64 lg:w-72 fhd:w-80 2k:w-96 transition-transform duration-300 hover:scale-105">
              <img
                src={profile}
                alt="Nahuel González"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* === Skills debajo (mismo ancho que Projects) === */}
        <Card className="animate-fade-in mt-12">
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl">
              Habilidades Técnicas
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "HTML / CSS",
                "Tailwind CSS",
                "Git",
                "Análisis Funcional",
                "ISO 9001",
                "Python",
                "C",
                ".NET",
                "JIRA"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm lg:text-base hover:bg-primary hover:text-primary-foreground transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>

        </Card>
        <Card className="animate-fade-in mt-12">
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl">
              Habilidades Blandas
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {[
                "Metodologías ágiles",
                "Scrum",
                "Kanban",
                "Trabajo en equipo",
                "Comunicación efectiva",
                "Resolución de problemas",
                "Gestión del tiempo"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm lg:text-base hover:bg-primary hover:text-primary-foreground transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>

        </Card>
      </div>
    </section>
  );
};

export default About;

