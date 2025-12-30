import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "TU_SERVICE_ID",      // service_xxxxx
        "TU_TEMPLATE_ID",     // template_xxxxx
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "TU_PUBLIC_KEY"       // public_xxxxx
      )
      .then(() => {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarme. Te responderé a la brevedad.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);

        toast({
          title: "Error al enviar el mensaje",
          description: "Ocurrió un problema. Por favor intentá nuevamente.",
          variant: "destructive",
        });
      });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
        <div className="max-w-4xl fhd:max-w-5xl 2k:max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
            Contacto
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 fhd:gap-10 2k:gap-12">
            <div className="space-y-6 lg:space-y-8 fhd:space-y-10 2k:space-y-12">
              <Card className="hover:shadow-lg transition-shadow animate-fade-in border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl text-foreground">
                    Información de Contacto
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                    Contáctame a través de cualquiera de estos medios
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 lg:space-y-6 fhd:space-y-8 2k:space-y-10">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-sm lg:text-base fhd:text-lg 2k:text-xl h-auto py-3 lg:py-4 fhd:py-5 2k:py-6"
                    asChild
                  >
                    <a href="mailto:nahuelgonzalez775@gmail.com">
                      <Mail className="w-5 h-5 lg:w-6 lg:h-6 fhd:w-7 fhd:h-7 2k:w-8 2k:h-8 mr-3" />
                      nahuelgonzalez775@gmail.com
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-sm lg:text-base fhd:text-lg 2k:text-xl h-auto py-3 lg:py-4 fhd:py-5 2k:py-6"
                    asChild
                  >
                    <a
                      href="https://wa.me/5493413567738?text=Hola%20Nahuel,%20te%20contacto%20desde%20tu%20portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 fhd:w-7 fhd:h-7 2k:w-8 2k:h-8 mr-3" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start text-sm lg:text-base fhd:text-lg 2k:text-xl h-auto py-3 lg:py-4 fhd:py-5 2k:py-6"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/nahuel-gonz%C3%A1lez-37a210333"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 fhd:w-7 fhd:h-7 2k:w-8 2k:h-8 mr-3" />
                      LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-lg transition-shadow animate-fade-in border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl lg:text-2xl fhd:text-3xl 2k:text-4xl text-foreground">
                  Envíame un Mensaje
                </CardTitle>
                <CardDescription className="text-sm lg:text-base fhd:text-lg 2k:text-xl text-muted-foreground">
                  Completa el formulario y te responderé pronto
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 fhd:space-y-8 2k:space-y-10">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tu mensaje..."
                      required
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
