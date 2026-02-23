import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
    countryCode: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      toast({
        title: t("contact.invalidEmailTitle"),
        description: t("contact.invalidEmail"),
        variant: "destructive",
      });
      return;
    }

    if (formData.countryCode) {
      const countryRegex = /^\+[0-9]{1,4}$/;
      if (!countryRegex.test(formData.countryCode)) {
        toast({
          title: t("contact.invalidCountryTitle"),
          description: t("contact.invalidCountryCode"),
          variant: "destructive",
        });
        return;
      }
    }

    if (formData.phone) {
      const phoneRegex = /^[0-9]{6,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        toast({
          title: t("contact.invalidPhoneTitle"),
          description: t("contact.invalidPhone"),
          variant: "destructive",
        });
        return;
      }
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nahuelgonzalez775@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone
              ? `${formData.countryCode} ${formData.phone}`
              : "Not provided",
            message: formData.message,
            _subject: t("contact.emailSubject"),
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) throw new Error("Error");

      toast({
        title: t("contact.toastSuccessTitle"),
        description: t("contact.toastSuccessDesc"),
      });

      setFormData({
        name: "",
        email: "",
        countryCode: "",
        phone: "",
        message: "",
      });

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
          className="text-3xl lg:text-4xl font-bold mb-12"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.infoTitle")}</CardTitle>
                <CardDescription>
                  {t("contact.infoSubtitle")}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:nahuelgonzalez775@gmail.com">
                      <Mail className="mr-3" />
                      nahuelgonzalez775@gmail.com
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
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
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
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
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
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
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.formTitle")}</CardTitle>
                <CardDescription>
                  {t("contact.formSubtitle")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <Label>{t("contact.name")}</Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <Label>{t("contact.email")}</Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Label>{t("contact.countryCode")}</Label>
                      <Input
                        placeholder="+54"
                        value={formData.countryCode}
                        onChange={(e) =>
                          setFormData({ ...formData, countryCode: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-span-2">
                      <Label>{t("contact.phoneOptional")}</Label>
                      <Input
                        placeholder="3413567738"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label>{t("contact.message")}</Label>
                    <Textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Button type="submit" className="w-full">
                      {t("contact.send")}
                    </Button>
                  </motion.div>

                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

