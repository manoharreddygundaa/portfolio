import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gundamanoharreddy15@gmail.com",
    href: "mailto:gundamanoharreddy15@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9154229291",
    href: "tel:+919154229291",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kothagudem, Telangana",
    href: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ SEND EMAIL FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_i5fsm8o", 
        "template_avz6l3c", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "lLINF8CuafwxDHdWN" 
      );

      toast({
        title: "Message Sent ✅",
        description: "Thank you! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed ❌",
        description: "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Let's Connect!
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing opportunities and projects.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <info.icon className="text-primary" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-background border border-border outline-none"
              />

              {/* Email */}
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-background border border-border outline-none"
              />

              {/* Message */}
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-background border border-border outline-none resize-none"
              />

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                type="submit"
                disabled={loading}
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;