import profile from "@/assets/Foto3.jpg";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const About = () => {
  const { t } = useTranslation();

  const aboutLines = t("about.paragraphs", { returnObjects: true }) as string[];
  const technicalSkills = t("about.technicalSkills.list", { returnObjects: true }) as string[];
  const softSkills = t("about.softSkills.list", { returnObjects: true }) as string[];

  return (
    <section id="about" className="pt-1 lg:pt-2 fhd:pt-3 2k:pt-4 pb-16 lg:pb-24 fhd:pb-32 2k:pb-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">

        <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
          {t("about.title")}
        </h2>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>{t("about.education.title")}</CardTitle>
              <CardDescription>{t("about.education.subtitle")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <p className="font-medium">{t("about.education.degree")}</p>
                <p className="text-muted-foreground">{t("about.education.university")}</p>
              </div>

              <div>
                <p className="font-medium">{t("about.education.iso")}</p>
                <p className="text-muted-foreground">{t("about.education.isoDetail")}</p>
              </div>

              <div>
                <p className="font-medium">{t("about.education.continuous")}</p>
                <p className="text-muted-foreground">{t("about.education.techFocus")}</p>
              </div>
            </CardContent>
          </Card>

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

        <Card className="animate-fade-in mt-12">
          <CardHeader>
            <CardTitle>{t("about.technicalSkills.title")}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {technicalSkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm lg:text-base hover:bg-primary hover:text-primary-foreground transition">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in mt-12">
          <CardHeader>
            <CardTitle>{t("about.softSkills.title")}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 lg:gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm lg:text-base hover:bg-primary hover:text-primary-foreground transition">
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


