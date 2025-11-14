const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <div className="max-w-4xl fhd:max-w-5xl 2k:max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
            Sobre mí
          </h2>
          <div className="space-y-6 lg:space-y-8 fhd:space-y-10 2k:space-y-12">
            <div className="prose prose-lg fhd:prose-xl 2k:prose-2xl max-w-none text-foreground animate-fade-in">
              <p className="text-base lg:text-lg fhd:text-xl 2k:text-2xl text-muted-foreground leading-relaxed">
                Soy un profesional apasionado por la tecnología y el desarrollo de software, con una sólida formación académica y experiencia en análisis funcional, programación y desarrollo frontend.
              </p>
            </div>
            
            <div className="grid gap-6 lg:gap-8 fhd:gap-10 2k:gap-12 mt-8 lg:mt-12 fhd:mt-16 2k:mt-20">
              <div className="bg-card border border-border rounded-lg p-6 lg:p-8 fhd:p-10 2k:p-12 hover:shadow-lg transition-shadow animate-fade-in">
                <h3 className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl font-semibold text-foreground mb-4 lg:mb-6 fhd:mb-8 2k:mb-10">
                  Formación Académica
                </h3>
                <ul className="space-y-3 lg:space-y-4 fhd:space-y-5 2k:space-y-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg lg:text-xl fhd:text-2xl 2k:text-3xl">•</span>
                    <div>
                      <p className="text-base lg:text-lg fhd:text-xl 2k:text-2xl font-medium text-foreground">
                        Tecnicatura Universitaria en Programación
                      </p>
                      <p className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                        Universidad Tecnológica Nacional (UTN)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg lg:text-xl fhd:text-2xl 2k:text-3xl">•</span>
                    <div>
                      <p className="text-base lg:text-lg fhd:text-xl 2k:text-2xl font-medium text-foreground">
                        Auditor Interno ISO 9001
                      </p>
                      <p className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                        Certificación en Sistemas de Gestión de Calidad
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-lg lg:text-xl fhd:text-2xl 2k:text-3xl">•</span>
                    <div>
                      <p className="text-base lg:text-lg fhd:text-xl 2k:text-2xl font-medium text-foreground">
                        Cursos de Desarrollo Web
                      </p>
                      <p className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                        Especialización en tecnologías frontend modernas
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 lg:p-8 fhd:p-10 2k:p-12 hover:shadow-lg transition-shadow animate-fade-in">
                <h3 className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl font-semibold text-foreground mb-4 lg:mb-6 fhd:mb-8 2k:mb-10">
                  Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-2 lg:gap-3 fhd:gap-4 2k:gap-5">
                  {["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git", "Análisis Funcional", "ISO 9001"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 lg:px-4 lg:py-2 fhd:px-5 fhd:py-2.5 2k:px-6 2k:py-3 bg-muted text-foreground rounded-md text-sm lg:text-base fhd:text-lg 2k:text-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
