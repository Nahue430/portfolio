import { useTranslation } from "react-i18next";
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
    <section id="certificates" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">

        <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
          {t("certificates.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 fhd:gap-10 2k:gap-12">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg lg:text-xl fhd:text-2xl 2k:text-3xl">
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
                <Button asChild variant="outline" className="w-full text-sm lg:text-base fhd:text-lg 2k:text-xl">
                  <a href={pdfs[index]} download target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 fhd:w-6 fhd:h-6 2k:w-7 2k:h-7 mr-2" />
                    {t("certificates.download")}
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

export default Certificates;
