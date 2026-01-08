import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/nahuelgonzalez775@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Mensaje desde mi portfolio",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Error al enviar");

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme. Te responderé a la brevedad.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error al enviar el mensaje",
        description: "Ocurrió un problema. Por favor intentá nuevamente.",
        variant: "destructive",
      });
    }
  };

return (
  <section id="contact" className="py-16 lg:py-24 fhd:py-32 2k:py-40 bg-muted">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 fhd:px-12 2k:px-16">
      
      {/* TÍTULO – IGUAL A CERTIFICADOS */}
      <h2 className="text-3xl lg:text-4xl fhd:text-5xl 2k:text-6xl font-bold text-foreground mb-8 lg:mb-12 fhd:mb-16 2k:mb-20 animate-fade-in">
        Contacto
      </h2>

      {/* CONTENIDO */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 fhd:gap-10 2k:gap-12">

        {/* INFO CONTACTO */}
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
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="mailto:nahuelgonzalez775@gmail.com">
                <Mail className="mr-3" />
                nahuelgonzalez775@gmail.com
              </a>
            </Button>

            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://wa.me/5493413567738?text=Hola%20Nahuel,%20te%20contacto%20desde%20tu%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-3" />
                WhatsApp
              </a>
            </Button>

            <Button variant="outline" className="w-full justify-start" asChild>
              <a
                href="https://www.linkedin.com/in/nahuel-gonz%C3%A1lez-37a210333"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-3" />
                LinkedIn
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* FORMULARIO */}
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
            <form
              action="https://formsubmit.co/nahuelgonzalez775@gmail.com"
              method="POST"
              className="space-y-4 lg:space-y-6 fhd:space-y-8 2k:space-y-10"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>

              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  </section>
);
};

export default Contact;


