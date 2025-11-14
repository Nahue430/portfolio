import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Dashboard de Gestión",
    description: "Aplicación web para gestión de proyectos con interface intuitiva y moderna. Desarrollada con React y TypeScript.",
    image: project1,
    github: "https://github.com/nahueldgonzalez",
    demo: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel administrativo.",
    image: project2,
    github: "https://github.com/nahueldgonzalez",
    demo: "#"
  },
  {
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
    image: project3,
    github: "https://github.com/nahueldgonzalez",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 fhd:gap-10 2k:gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="gap-4">
                <Button 
                  variant="default" 
                  className="flex-1 text-sm lg:text-base fhd:text-lg 2k:text-xl"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 text-sm lg:text-base fhd:text-lg 2k:text-xl"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
