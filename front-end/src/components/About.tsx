import profile from "@/assets/Foto3.jpg";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const aboutLines = [
  "Soy desarrollador fullstack con enfoque en análisis funcional y optimización de procesos. Mi carrera comenzó en áreas administrativas y de calidad, donde aprendí a trabajar con estándares ISO 9001 y a pensar cada tarea desde la eficiencia y la mejora continua.",
  "Esa mirada técnica y metodológica me llevó al desarrollo de software, donde combino lógica, diseño y análisis para crear soluciones claras y de impacto.",
  "Como desarrollador freelance, he colaborado con pymes en la implementación de herramientas que integran automatización, bases de datos y mejora de procesos, aportando soluciones prácticas y medibles.",
  "Me motiva incorporarme a equipos donde pueda aportar esta visión integral, seguir aprendiendo y contribuir al desarrollo de productos tecnológicos que generen valor real."
];

const About = () => {
  return (
    <section id="about" className="pt-1 lg:pt-2 fhd:pt-3 2k:pt-4 pb-16 lg:pb-24 fhd:pb-32 2k:pb-40 bg-background">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">

        {/* Título */}
        <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
          Sobre mí
        </h2>

        {/* Texto con reveal-line */}
        <div className="mb-12 max-w-4xl space-y-3">
          {aboutLines.map((line, index) => (
            <p
              key={index}
              className="reveal-line text-base lg:text-lg fhd:text-xl 2k:text-2xl text-muted-foreground leading-relaxed text-justify"
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              {line}
            </p>
          ))}
        </div>

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
                <p className="text-base font-medium">Capacitación continua en desarrollo web, cloud e inteligencia artificial</p>
                <p className="text-muted-foreground">Tecnologías web, cloud y automatización</p>
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
              {["React", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS", "Git", "Análisis Funcional", "ISO 9001", "Python", "C", ".NET", "JIRA"].map((skill) => (
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
              {["Metodologías ágiles", "Scrum", "Kanban", "Trabajo en equipo", "Comunicación efectiva", "Resolución de problemas", "Gestión del tiempo"].map((skill) => (
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


