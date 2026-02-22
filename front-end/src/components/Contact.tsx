import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          _subject: t("contact.emailSubject"),
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Error");

      toast({
        title: t("contact.toastSuccessTitle"),
        description: t("contact.toastSuccessDesc"),
      });

      setFormData({ name: "", email: "", message: "" });

    } catch {
      toast({
        title: t("contact.toastErrorTitle"),
        description: t("contact.toastErrorDesc"),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          {t("contact.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* INFORMACIÓN DE CONTACTO */}
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.infoTitle")}</CardTitle>
              <CardDescription>{t("contact.infoSubtitle")}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">

              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:nahuelgonzalez775@gmail.com">
                  <Mail className="mr-3" />
                  nahuelgonzalez775@gmail.com
                </a>
              </Button>

              <Button variant="outline" className="w-full justify-start" asChild>
                <a
                  href="https://wa.me/5493413567738"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3" />
                  WhatsApp
                </a>
              </Button>

              <Button variant="outline" className="w-full justify-start" asChild>
                <a
                  href="https://github.com/Nahue430"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-3" />
                  GitHub
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
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.formTitle")}</CardTitle>
              <CardDescription>{t("contact.formSubtitle")}</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <Label htmlFor="name">{t("contact.name")}</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full">
                  {t("contact.send")}
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


