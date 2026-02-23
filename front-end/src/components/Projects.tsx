import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
import imagen2 from "@/assets/imagen2.png";
import imagen3 from "@/assets/imagen3.png";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects.items", { returnObjects: true }) as any[];

  const images = [imagen1, imagen2, imagen3];
  const videos = ["/videos/video1.mp4", "/videos/VideoAgent.mp4", "/videos/video1.mp4"];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={images[index]}
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
                      href="https://github.com/nahueldgonzalez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1">
                        {t("projects.demo")}
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>
                          {project.title} – {t("projects.demo")}
                        </DialogTitle>
                      </DialogHeader>

                      <video
                        src={videos[index]}
                        controls
                        autoPlay
                        className="w-full rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

