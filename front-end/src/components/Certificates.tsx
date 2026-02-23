import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Certificates = () => {
  const { t } = useTranslation();

  const certificates = t("certificates.items", { returnObjects: true }) as any[];

  const pdfs = [
    "/certificates/UTN-certificate.pdf",
    "/certificates/IRAM-ISO-9001.pdf",
    "/certificates/freeCodeCamp-english-B1-Passed.pdf",
    "/certificates/Nahuel-González-Workflow-Automation.pdf"
  ];

  return (
    <section id="certificates" className="py-16 lg:py-24 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-foreground mb-12"
        >
          {t("certificates.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-border bg-card shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl">
                    {cert.title}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground">
                    {cert.institution} • {cert.year}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={pdfs[index]} download target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {t("certificates.download")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
