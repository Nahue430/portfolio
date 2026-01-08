import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import imagen1 from "@/assets/imagen1.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Landing Page",
    description:
      "Landing Page con secciones y contactos con una interfaz intuitiva y moderna. Desarrollada con React y TypeScript.",
    image: imagen1,
    github: "https://github.com/nahueldgonzalez",
    video: "/videos/video1.mp4",
  },
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico con carrito de compras, pasarela de pago y panel administrativo.",
    image: project2,
    github: "https://github.com/nahueldgonzalez",
    video: "/videos/video1.mp4",
  },
  {
    title: "Task Manager App",
    description:
      "Aplicación de gestión de tareas con funcionalidades de colaboración y notificaciones.",
    image: project3,
    github: "https://github.com/nahueldgonzalez",
    video: "/videos/video1.mp4",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="gap-4">
                <Button asChild className="flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1">
                      Demo
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{project.title} – Demo</DialogTitle>
                    </DialogHeader>

                    <video
                      src={project.video}
                      controls
                      autoPlay
                      className="w-full rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

