import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0 animation-delay-100">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 animate-fade-up opacity-0 animation-delay-200">
              Gunda{" "}
              <span className="gradient-text">Manoharreddy</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up opacity-0 animation-delay-300">
              Aspiring Software Developer
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up opacity-0 animation-delay-400">
              A passionate developer who enjoys learning new technologies and
              turning ideas into real-world applications. Driven by continuous
              improvement, teamwork, and solving meaningful problems through
              coding and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 animation-delay-500">
              <Button variant="hero" size="lg" asChild>
                <a href="/Gunda_Manoharreddy_Resume.pdf" download>Download Resume</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-up opacity-0 animation-delay-500">
              <a
                href="mailto:gundamanoharreddy15@mail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Code Card */}
          <div className="flex-1 flex justify-center animate-fade-in opacity-0 animation-delay-300">
            <div className="relative animate-float">
              <div className="rounded-2xl border border-primary/20 bg-[hsl(180_20%_12%)] text-[hsl(173_20%_85%)] p-6 md:p-8 shadow-[0_0_40px_hsl(var(--primary)/0.2),0_20px_60px_-15px_hsl(180_20%_5%/0.5)] font-mono text-sm md:text-base w-[300px] md:w-[360px]">
                {/* Window dots */}
                <div className="flex gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-[hsl(0_70%_55%)]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(45_80%_55%)]" />
                  <div className="w-3 h-3 rounded-full bg-[hsl(130_50%_50%)]" />
                </div>
                {/* Code content */}
                <div className="space-y-1 leading-relaxed">
                  <p>
                    <span className="text-[hsl(173_60%_65%)]">const</span>{" "}
                    <span className="text-[hsl(190_70%_70%)]">developer</span>{" "}
                    <span className="text-[hsl(173_60%_65%)]">=</span>{" "}
                    <span className="text-[hsl(40_70%_65%)]">{"{"}</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-[hsl(190_70%_70%)]">name</span>
                    <span className="text-[hsl(173_30%_45%)]">:</span>{" "}
                    <span className="text-[hsl(150_50%_65%)]">"Manohar Reddy"</span>
                    <span className="text-[hsl(173_30%_45%)]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-[hsl(190_70%_70%)]">role</span>
                    <span className="text-[hsl(173_30%_45%)]">:</span>{" "}
                    <span className="text-[hsl(150_50%_65%)]">"Full Stack Developer"</span>
                    <span className="text-[hsl(173_30%_45%)]">,</span>
                  </p>
                  <p className="pl-5">
                    <span className="text-[hsl(190_70%_70%)]">skills</span>
                    <span className="text-[hsl(173_30%_45%)]">:</span>{" "}
                    <span className="text-[hsl(40_70%_65%)]">[</span>
                    <span className="text-[hsl(150_50%_65%)]">"React"</span>
                    <span className="text-[hsl(173_30%_45%)]">,</span>{" "}
                    <span className="text-[hsl(150_50%_65%)]">"Node"</span>
                    <span className="text-[hsl(173_30%_45%)]">,</span>{" "}
                    <span className="text-[hsl(150_50%_65%)]">"MongoDB"</span>
                    <span className="text-[hsl(40_70%_65%)]">]</span>
                  </p>
                  <p><span className="text-[hsl(40_70%_65%)]">{"}"}</span><span className="text-[hsl(173_30%_45%)]">;</span></p>
                </div>
                {/* Blinking cursor */}
                <div className="mt-3 w-2.5 h-5 bg-[hsl(var(--primary))] animate-[pulse_1s_steps(2)_infinite] rounded-sm" />
              </div>
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl -z-10" />
              {/* Floating accents */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-2xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full animate-float animation-delay-200" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-300"
          >
            <ArrowDown size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
