import profile from "@/assets/Foto3.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const About = () => {
  const { t } = useTranslation();

  const aboutLines = t("about.paragraphs", { returnObjects: true }) as string[];
  const technicalSkills = t("about.technicalSkills.list", { returnObjects: true }) as string[];
  const softSkills = t("about.softSkills.list", { returnObjects: true }) as string[];

  return (
    <section id="about" className="pt-1 lg:pt-2 pb-16 lg:pb-24 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-foreground mb-12"
        >
          {t("about.title")}
        </motion.h2>

        {/* Paragraphs */}
        <div className="mb-12 max-w-4xl space-y-4">
          {aboutLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed text-justify"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Education + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-xl overflow-hidden shadow-lg w-64 lg:w-72 transition-transform duration-300 hover:scale-105">
              <img
                src={profile}
                alt="Nahuel González"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>{t("about.technicalSkills.title")}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <motion.span
                    key={`${skill}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm lg:text-base
                               cursor-pointer
                               transition-all duration-300 ease-in-out
                               hover:scale-110
                               hover:bg-neutral-900
                               hover:text-amber-100"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>{t("about.softSkills.title")}</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={`${skill}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm lg:text-base
                               cursor-pointer
                               transition-all duration-300 ease-in-out
                               hover:scale-110
                               hover:bg-neutral-900
                               hover:text-amber-100"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;


